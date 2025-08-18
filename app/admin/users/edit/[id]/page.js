'use client'
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import { useParams, useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  const params = useParams();
  const id = params.id;

  const [firstname, setFirstname] = useState('')
  const [fullname, setFullname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    async function getUser() {
      try {
        const res = await fetch(`http://itdev.cmtc.ac.th:3000/api/users/${id}`);
        if (!res.ok) {
          console.error('Failed to fetch data');
          return;
        }
        const data = await res.json();
        const user = Array.isArray(data) ? data[0] : data;

        if (user) {
          setFirstname(user.firstname || '');
          setFullname(user.fullname || '');
          setLastname(user.lastname || '');
          setUsername(user.username || '');
          setPassword(user.password || '');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getUser();
  }, [id]);

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ id, firstname, fullname, lastname, username, password }),
      });
      const result = await res.json();
      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: '<h3>ปรับปรุงข้อมูลเรียบร้อยแล้ว</h3>',
          showConfirmButton: false,
          timer: 2000
        }).then(() => {
          router.push('/register')
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'เกิดข้อผิดพลาด!',
          icon: 'error',
          confirmButtonText: 'ตกลง'
        })
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'ข้อผิดพลาดเครือข่าย',
        text: 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้',
      })
    }
  }

  // SVG Icons (แกะง่ายและเล็ก)  
  const IconUser = () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A9 9 0 1118.879 6.196 9 9 0 015.121 17.804z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 via-white to-purple-100 flex items-center justify-center px-4">
      <div className="bg-white max-w-lg w-full rounded-3xl shadow-2xl p-10 border border-gray-200">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-8 text-center relative before:absolute before:content-[''] before:w-20 before:h-1 before:bg-blue-500 before:rounded-md before:left-1/2 before:-bottom-3 before:-translate-x-1/2">
          แก้ไขข้อมูลสมัครสมาชิก #{id}
        </h1>
        <form onSubmit={handleUpdateSubmit} className="space-y-6">
          {/* คำนำหน้า */}
          <div>
            <label htmlFor="firstname" className="block mb-2 font-semibold text-gray-700">
              คำนำหน้า (Firstname)
            </label>
            <select
              id="firstname"
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-400 transition duration-300"
              required
            >
              <option value="">-- เลือกคำนำหน้า --</option>
              <option value="นาย">นาย</option>
              <option value="นาง">นาง</option>
              <option value="นางสาว">นางสาว</option>
            </select>
          </div>

          {/* ชื่อ */}
          <div>
            <label htmlFor="fullname" className="block mb-2 font-semibold text-gray-700 flex items-center gap-2">
              <IconUser /> ชื่อ (Fullname)
            </label>
            <input
              type="text"
              id="fullname"
              placeholder="ชื่อ"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-400 transition duration-300"
              required
            />
          </div>

          {/* นามสกุล */}
          <div>
            <label htmlFor="lastname" className="block mb-2 font-semibold text-gray-700 flex items-center gap-2">
              <IconUser /> นามสกุล (Lastname)
            </label>
            <input
              type="text"
              id="lastname"
              placeholder="นามสกุล"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-400 transition duration-300"
              required
            />
          </div>

          {/* Username */}
          <div>
            <label htmlFor="username" className="block mb-2 font-semibold text-gray-700 flex items-center gap-2">
              <IconUser /> Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-400 transition duration-300"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block mb-2 font-semibold text-gray-700 flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.104 0 2-.896 2-2V7a2 2 0 00-4 0v2c0 1.104.896 2 2 2z" />
                <path strokeLinecap="round" strokeLinejoin="roun
