'use client';
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react';

export default function Page() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users');
        if (!res.ok) {
          console.error('Failed to fetch data');
          return;
        }
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getUsers();
    const interval = setInterval(getUsers, 1000);
    return () => clearInterval(interval);
  }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter((u) =>
      [u.id, u.firstname, u.fullname, u.lastname, u.username, u.address, u.sex, u.birthday]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(q))
    );
  }, [items, query]);

  const maskPassword = (pwd) => {
    if (!pwd) return '';
    const len = String(pwd).length;
    return '•'.repeat(Math.min(len, 8));
  };

  const sexBadge = (sex) => {
    const s = String(sex || '').trim();
    if (s === 'ชาย' || s.toLowerCase() === 'male') return 'bg-info';
    if (s === 'หญิง' || s.toLowerCase() === 'female') return 'bg-danger';
    return 'bg-secondary';
  };

  return (
    <div className="container my-5">
      <div className="card shadow-sm border-0">
        <div className="card-header bg-primary text-white d-flex flex-wrap align-items-center justify-content-between gap-2">
          <div>
            <h5 className="mb-0">Users</h5>
            <small className="text-white-50">รวม {filtered.length} รายการ</small>
          </div>
          <div className="d-flex align-items-center gap-2">
            <div className="input-group input-group-sm bg-white rounded overflow-hidden" style={{ minWidth: 240 }}>
              <span className="input-group-text bg-transparent border-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search text-muted" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85zm-5.242 1.656a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/>
                </svg>
              </span>
              <input
                type="search"
                className="form-control border-0"
                placeholder="ค้นหา... (ชื่อ, นามสกุล, ผู้ใช้ ฯลฯ)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <Link href="/register" className="btn btn-light btn-sm text-primary fw-semibold">
              + เพิ่มผู้ใช้
            </Link>
          </div>
        </div>

        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th className='text-center' style={{ width: 60 }}>#</th>
                  <th>คำนำหน้า</th>
                  <th>ชื่อ</th>
                  <th>นามสกุล</th>
                  <th>ผู้ใช้</th>
                  <th>รหัสผ่าน</th>
                  <th>ที่อยู่</th>
                  <th>เพศ</th>
                  <th>วันเกิด</th>
                  <th className='text-center' style={{ width: 80 }}>แก้ไข</th>
                  <th className='text-center' style={{ width: 80 }}>ลบ</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((item) => (
                  <tr key={item.id}>
                    <td className='text-center'>{item.id}</td>
                    <td>{item.firstname}</td>
                    <td>{item.fullname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.username}</td>
                    <td><code className="user-select-none">{maskPassword(item.password)}</code></td>
                    <td className="text-truncate" style={{ maxWidth: 240 }}>{item.address}</td>
                    <td>
                      <span className={`badge ${sexBadge(item.sex)}`}>{item.sex || '-'}</span>
                    </td>
                    <td>{item.birthday}</td>
                    <td className='text-center'>
                      <Link href={`/admin/users/edit/${item.id}`} className="btn btn-outline-warning btn-sm">Edit</Link>
                    </td>
                    <td className='text-center'>
                      <button className="btn btn-outline-danger btn-sm" type="button">Del</button>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={11} className="text-center text-muted py-4">ไม่พบข้อมูล</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}