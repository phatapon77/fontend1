'use client'
import { useEffect, useRef, useState, FormEvent } from 'react'
import Swal from 'sweetalert2'
import { useParams, useRouter } from 'next/navigation'
import './edit.css'

type Sex = 'male' | 'female' | 'other' | ''

const honorifics = ['นาย', 'นาง', 'นางสาว'] as const

export default function Page() {
  const router = useRouter()
  const { id } = useParams() as { id: string }

  // Form state
  const [prefix, setPrefix] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [sex, setSex] = useState<Sex>('')
  const [birthday, setBirthday] = useState('')
  const [loading, setLoading] = useState(true)

  // Dirty tracking
  const [dirty, setDirty] = useState({
    prefix: false,
    firstName: false,
    lastName: false,
    username: false,
    password: false,
    address: false,
    sex: false,
    birthday: false,
  })
  const dirtyRef = useRef(dirty)
  useEffect(() => { dirtyRef.current = dirty }, [dirty])

  // Fullname preview
  const fullNamePreview = [prefix, firstName, lastName].filter(Boolean).join(' ')

  // Fetch with abort management
  const fetchCtrlRef = useRef<AbortController | null>(null)
  const getUser = async (initial = false) => {
    if (!id) return
    try {
      fetchCtrlRef.current?.abort()
      const ctrl = new AbortController()
      fetchCtrlRef.current = ctrl

      const res = await fetch(`http://itdev.cmtc.ac.th:3000/api/users/${id}`, { signal: ctrl.signal })
      if (!res.ok) return console.error('Failed to fetch data')
      const data = await res.json()
      if (Array.isArray(data) && data.length > 0) {
        const u = data[0] || {}
        const d = dirtyRef.current
        const derivedPrefix = (typeof u.fullname === 'string' && honorifics.find(h => u.fullname.startsWith(h))) || ''
        if (!d.prefix) setPrefix(derivedPrefix)
        if (!d.firstName) setFirstName(u.firstname || '')
        if (!d.lastName) setLastName(u.lastname || '')
        if (!d.username) setUsername(u.username || '')
        if (!d.password) setPassword(u.password || '')
        if (!d.address) setAddress(u.address || '')
        if (!d.sex) setSex((u.sex || u.gender || '') as Sex)
        if (!d.birthday) setBirthday(u.birthday || u.birthdate || '')
      }
    } catch (e) {
      if ((e as any)?.name !== 'AbortError') console.error('Error fetching data:', e)
    } finally {
      if (initial) setLoading(false)
    }
  }

  // Initial + polling
  useEffect(() => { getUser(true) }, [id])
  useEffect(() => {
    if (!id) return
    const interval = setInterval(() => { getUser(false) }, 2000)
    return () => clearInterval(interval)
  }, [id])

  // Particle background + Parallax tilt + Neon cursor ring (scoped to this page)
  useEffect(() => {
    // Particle canvas
    const canvas = document.createElement('canvas')
    canvas.className = 'particle-canvas'
    document.body.appendChild(canvas)
    const ctx = canvas.getContext('2d')!
    let W = window.innerWidth
    let H = window.innerHeight
    canvas.width = W; canvas.height = H

    class Particle {
      x: number; y: number; size: number; vx: number; vy: number; hue: number
      constructor() {
        this.x = Math.random() * W
        this.y = Math.random() * H
        this.size = Math.random() * 3 + 1
        this.vx = (Math.random() - 0.5) * 1.2
        this.vy = (Math.random() - 0.5) * 1.2
        this.hue = Math.random() * 360
      }
      update() {
        this.x += this.vx; this.y += this.vy
        if (this.x < 0 || this.x > W) this.vx *= -1
        if (this.y < 0 || this.y > H) this.vy *= -1
        this.hue += 0.6
      }
      draw() {
        ctx.beginPath()
        const grd = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 4)
        grd.addColorStop(0, `hsl(${this.hue},100%,70%)`)
        grd.addColorStop(1, 'transparent')
        ctx.fillStyle = grd
        ctx.shadowColor = hsl(${this.hue},100%,75%)
        ctx.shadowBlur = 12
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }
    const particles: Particle[] = []; const count = 100
    for (let i = 0; i < count; i++) particles.push(new Particle())

    const mouse = { x: W / 2, y: H / 2 }
    const onMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY }
    window.addEventListener('mousemove', onMove)

    function animate() {
      ctx.clearRect(0, 0, W, H)
      particles.forEach((p, i) => {
        p.update(); p.draw()
        for (let j = i + 1; j < count; j++) {
          const q = particles[j]
          const dx = p.x - q.x; const dy = p.y - q.y; const dist = Math.sqrt(dx*dx + dy*dy)
          if (dist < 130) {
            ctx.beginPath()
            ctx.strokeStyle = hsla(${(p.hue+q.hue)/2},100%,75%,${1-dist/130})
            ctx.lineWidth = 0.8
            ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke()
          }
        }
        const dxm = p.x - mouse.x; const dym = p.y - mouse.y; const dm = Math.sqrt(dxm*dxm + dym*dym)
        if (dm < 160) {
          ctx.beginPath(); ctx.strokeStyle = `rgba(255,255,255,${1-dm/160})`; ctx.lineWidth = 1.2
          ctx.moveTo(p.x,p.y); ctx.lineTo(mouse.x,mouse.y); ctx.stroke()
        }
      })
      requestAnimationFrame(animate)
    }
    animate()

    const resize = () => { W = window.innerWidth; H = window.innerHeight; canvas.width = W; canvas.height = H }
    window.addEventListener('resize', resize)

    // Parallax tilt on card
    const card = document.getElementById('editCard')
    let rafId: number | null = null
    let targetRX = 0, targetRY = 0, curRX = 0, curRY = 0
    const onMoveTilt = (e: MouseEvent) => {
      if (!card) return
      const rect = card.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / rect.width
      const dy = (e.clientY - cy) / rect.height
      targetRY = dx * 10 // rotateY
      targetRX = -dy * 10 // rotateX
      if (rafId == null) rafId = requestAnimationFrame(updateTilt)
    }
    const updateTilt = () => {
      curRX += (targetRX - curRX) * 0.08
      curRY += (targetRY - curRY) * 0.08
      if (card) card.style.transform = perspective(1000px) rotateX(${curRX}deg) rotateY(${curRY}deg)
      if (Math.abs(curRX - targetRX) > 0.01 || Math.abs(curRY - targetRY) > 0.01) {
        rafId = requestAnimationFrame(updateTilt)
      } else {
        rafId = null
      }
    }
    const onLeaveTilt = () => {
      targetRX = 0; targetRY = 0
      if (rafId == null) rafId = requestAnimationFrame(updateTilt)
    }
    window.addEventListener('mousemove', onMoveTilt)
    window.addEventListener('mouseleave', onLeaveTilt)

    // Neon cursor ring
    const ring = document.createElement('div')
    Object.assign(ring.style, {
      position: 'fixed', width: '18px', height: '18px', borderRadius: '50%',
      border: '2px solid rgba(0,255,159,0.9)', boxShadow: '0 0 16px rgba(0,255,159,0.6)',
      pointerEvents: 'none', zIndex: '99999', mixBlendMode: 'screen',
      left: '0px', top: '0px', transform: 'translate(-50%, -50%)', transition: 'border-color .2s ease'
    } as CSSStyleDeclaration)
    document.body.appendChild(ring)
    let tx = W/2, ty = H/2, rx = tx, ry = ty
    const onMoveRing = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY }
    const loopRing = () => {
      rx += (tx - rx) * 0.2
      ry += (ty - ry) * 0.2
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      requestAnimationFrame(loopRing)
    }
    loopRing()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousemove', onMoveTilt)
      window.removeEventListener('mouseleave', onLeaveTilt)
      document.body.removeChild(canvas)
      document.body.contains(ring) && document.body.removeChild(ring)
    }
  }, [])

  // Submit
  const handleUpdateSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users', {
        method: 'PUT',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id,
          firstname: firstName,
          fullname: fullNamePreview,
          lastname: lastName,
          username,
          password,
          address,
          sex,
          birthday,
        })
      })
      const result = await res.json()
      if (res.ok) {
        await Swal.fire({ icon: 'success', title: '<h3>ปรับปรุงข้อมูลเรียบร้อยแล้ว</h3>', timer: 2000, showConfirmButton: false })
        router.push('/admin/user')
      } else {
        Swal.fire({ title: 'Error!', text: 'เกิดข้อผิดพลาด!', icon: 'error', confirmButtonText: 'ตกลง' })
      }
    } catch {
      Swal.fire({ icon: 'error', title: 'ข้อผิดพลาดเครือข่าย', text: 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้' })
    }
  }

  return (
    <div className="edit-wrapper">
      <div className="edit-card" id="editCard">
        <div className="edit-header">
          <h2>แก้ไขข้อมูลสมาชิก 🛠️</h2>
          <p className="subtitle">แก้ไขสมาช��ก #{id} — อัปเดตแบบเรียลไทม์</p>
        </div>

        {loading ? (
          <div>กำลังโหลด...</div>
        ) : (
          <>
            <div className="form-section">
              <h3>ภาพรวม ✨</h3>
              <label>
                รหัสสมาชิก
                <input type="text" value={`#${id}`} readOnly />
              </label>
              <label>
                ชื่อเต็ม (Preview)
                <input type="text" value={fullNamePreview} readOnly placeholder="ชื่อเต็มจะถูกสร้างอัตโนมัติ" />
              </label>
              <label>
                ชื่อผู้ใช้ (ปัจจุบัน)
                <input type="text" value={username} readOn