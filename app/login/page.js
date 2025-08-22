'use client';

import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ username: '', password: '', remember: false });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('rememberUser');
      if (savedUser) setForm((f) => ({ ...f, username: savedUser, remember: true }));
    } catch {}
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const attemptLogin = async (username, password) => {
    // Primary API attempt (adjust endpoint as needed)
    const endpoints = [
      'https://backend-nextjs-virid.vercel.app/api/login',
      'https://backend-nextjs-virid.vercel.app/api/auth/login',
    ];
    for (const url of endpoints) {
      try {
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        });
        if (res.ok) return true;
      } catch (e) {
        // try next endpoint
      }
    }
    // Fallback: local demo login for development
    if (username === 'demo' && password === 'demo') return true;
    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const ok = await attemptLogin(form.username, form.password);
      if (ok) {
        try {
          if (form.remember) localStorage.setItem('rememberUser', form.username);
          else localStorage.removeItem('rememberUser');
          localStorage.setItem('token', 'logged-in');
        } catch {}
        await Swal.fire({ icon: 'success', title: 'Welcome back!', text: 'เข้าสู่ระบบสำเร็จ', timer: 1200, showConfirmButton: false });
        router.push('/');
      } else {
        setError('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
      }
    } catch (e) {
      setError('เกิดข้อผิดพลาด โปรดลองใหม่อีกครั้ง');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <h1 className="login-title">Sign In</h1>
        <p className="login-sub">ยินดีต้อนรับกลับสู่ระบบ</p>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="ระบุชื่อผู้ใช้"
              value={form.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field">
            <label>Password</label>
            <div className="password-wrap">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="รหัสผ่าน"
                value={form.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="toggle-visibility"
                onClick={() => setShowPassword((s) => !s)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                title={showPassword ? 'ซ่อนรหัสผ่าน' : 'แสดงรหัสผ่าน'}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          <div className="row">
            <label className="remember">
              <input type="checkbox" name="remember" checked={form.remember} onChange={handleChange} />
              <span>จำฉันไว้</span>
            </label>
            <a className="link" href="#">ลืมรหัสผ่าน?</a>
          </div>

          {error && <div className="login-error">{error}</div>}

          <button type="submit" className="btn" disabled={loading}>
            {loading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
          </button>

          <div className="hint">ยังไม่มีบัญชี? <a className="link" href="/register">สมัครสมาชิก</a></div>
        </form>
      </div>

      {/* Scoped styles for futuristic theme */}
      <style jsx>{`
        :root {
          --cy: #00ffff;
          --neon: rgba(0, 255, 255, 0.22);
          --glass: rgba(10, 20, 40, 0.65);
          --ink: #ffffff;
          --primary: #1a73e8;
        }

        /* RGB conic gradient like register */
        @property --rgb-angle {
          syntax: '<angle>';
          inherits: false;
          initial-value: 0turn;
        }
        @keyframes rgb-rotate { to { --rgb-angle: 1turn; } }

        .login-bg {
          position: relative;
          min-height: 100vh;
          display: grid;
          place-items: center;
          padding: 24px;
          background:
            radial-gradient(800px circle at 10% 10%, rgba(255,255,255,0.06), transparent 40%),
            radial-gradient(600px circle at 90% 20%, rgba(255,255,255,0.04), transparent 35%),
            linear-gradient(135deg, #0a2540 0%, #0b3a75 50%, #1e499b 100%);
          overflow: hidden;
        }

        /* Neon grid floor */
        .login-bg::before {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: -10%;
          height: 70vh;
          background:
            repeating-linear-gradient(to right, var(--neon) 0 2px, transparent 2px 60px),
            repeating-linear-gradient(to top, var(--neon) 0 2px, transparent 2px 60px);
          transform: perspective(900px) rotateX(62deg) scale(1.2);
          transform-origin: bottom;
          filter: drop-shadow(0 0 10px rgba(0, 255, 255, 0.25));
          animation: grid-scroll 12s linear infinite;
          opacity: .75;
          pointer-events: none;
        }

        @keyframes grid-scroll { 0% { background-position: 0 0, 0 0; } 100% { background-position: 0 -600px, -600px 0; } }

        /* Scanlines + horizon glow + particles */
        .login-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(ellipse at 50% 100%, rgba(0, 204, 255, 0.38) 0%, rgba(0, 204, 255, 0.0) 60%),
            repeating-linear-gradient(180deg, rgba(0,255,255,.08) 0 2px, transparent 2px 40px),
            url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128"><rect width="128" height="128" fill="transparent"/><rect x="10" y="20" width="2" height="2" fill="white" opacity="0.4"/><rect x="40" y="60" width="2" height="2" fill="white" opacity="0.5"/><rect x="70" y="30" width="2" height="2" fill="white" opacity="0.45"/><rect x="100" y="80" width="2" height="2" fill="white" opacity="0.4"/><rect x="26" y="96" width="2" height="2" fill="white" opacity="0.35"/></svg>');
          background-repeat: no-repeat, no-repeat, repeat;
          background-size: 100% 100%, 100% 100%, 256px 256px;
          background-position: 50% 50%, 0 0, 0 0;
          animation: scan-sweep 10s linear infinite;
          opacity: .55;
          pointer-events: none;
        }
        @keyframes scan-sweep { 0% { background-position: 50% 50%, 0 -100vh, 0 0; } 100% { background-position: 50% 50%, 0 100vh, -1024px 0; } }

        .login-card {
          position: relative;
          width: 100%;
          max-width: 380px;
          padding: 28px;
          border-radius: 16px;
          background: var(--glass);
          border: 1px solid rgba(125, 211, 252, 0.35);
          color: var(--ink);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.28);
          backdrop-filter: blur(10px);
        }
        .login-card::before,
        .login-card::after {
          content: '';
          position: absolute; inset: 0; border-radius: 16px; padding: 2px;
          background: conic-gradient(from var(--rgb-angle), #ff0055, #ff7a00, #ffee00, #31ff00, #00ffee, #006eff, #b800ff, #ff0055);
          pointer-events: none;
        }
        .login-card::before { -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); -webkit-mask-composite: xor; mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); mask-composite: exclude; animation: rgb-rotate 4.5s linear infinite; }
        .login-card::after { filter: blur(12px); opacity: .35; -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); -webkit-mask-composite: xor; mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); mask-composite: exclude; animation: rgb-rotate 4.5s linear infinite; }

        .login-title { margin: 0 0 4px; text-align: center; font-weight: 800; letter-spacing: .6px; color: var(--primary); }
        .login-sub { margin: 0 0 18px; text-align: center; font-size: 13px; color: var(--primary); opacity: 1; }

        .login-form { display: grid; gap: 14px; }
        .field label { display: block; margin-bottom: 6px; font-size: 12px; color: var(--primary); opacity: 1; }
        .field input[type='text'], .field input[type='password'] { width: 100%; padding: 10px 12px; border-radius: 10px; border: 2px solid #1a73e8; background: rgba(0,0,0,0.25); color: #ffffff; caret-color: #ffffff; outline: none; transition: box-shadow .16s ease, border-color .16s ease; }
        .field input:focus { border-color: #1665c1; box-shadow: 0 0 0 4px rgba(26,115,232,0.20); }
        .field input::placeholder { color: #ffffff; opacity: 0.9; }

        .password-wrap { position: relative; }
        .password-wrap .toggle-visibility { position: absolute; right: 6px; top: 50%; transform: translateY(-50%); width: 36px; height: 28px; border-radius: 8px; border: 1px solid rgba(125,211,252,.35); background: rgba(0,0,0,.2); color: #e6f3ff; cursor: pointer; }

        .row { display: flex; align-items: center; justify-content: space-between; }
        .remember { display: inline-flex; gap: 8px; align-items: center; font-size: 12px; color: var(--primary); opacity: 1; }
        .link { color: var(--primary); text-decoration: none; }
        .link:hover { text-decoration: underline; }

        .login-error { color: #ffffff; text-align: center; font-size: 13px; }

        .btn { width: 100%; padding: 12px; border: none; border-radius: 10px; font-weight: 700; color: #fff; background: linear-gradient(135deg, #1a73e8, #4f46e5); cursor: pointer; box-shadow: 0 8px 18px rgba(26,115,232,.25); transition: transform .12s ease, box-shadow .16s ease, filter .16s ease; }
        .btn:hover { transform: translateY(-1px); filter: brightness(1.04); box-shadow: 0 12px 28px rgba(26,115,232,.32); }

        .hint { margin-top: 12px; text-align: center; font-size: 12px; color: var(--primary); opacity: 1; }

        @media (prefers-reduced-motion: reduce) {
          .login-card::before, .login-card::after, .login-bg::before, .login-bg::after { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
