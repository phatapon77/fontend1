'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import './userlist.css';

export default function Page() {
  const [items, setItems] = useState([]);

  // ฟังก์ชัน fetch users
  const getUsers = async () => {
    try {
      const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users');
      if (!res.ok) throw new Error('Failed to fetch data');
      const data = await res.json();
      setItems(data);
    } catch (err) {
      console.error('Error:', err);
    }
  };

  // โหลดตอนแรก + ตั้ง interval
  useEffect(() => {
    getUsers(); // โหลดครั้งแรก
    const interval = setInterval(getUsers, 5000); // โหลดทุก 5 วิ
    return () => clearInterval(interval); // เคลียร์ตอน component ถูก unmount
  }, []);

  return (
    <div className="userlist-container">
      <div className="userlist-card">
        <h2 className="userlist-title">🟣 Users List</h2>
        <table className="userlist-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Firstname</th>
              <th>Fullname</th>
              <th>Lastname</th>
              <th>Username</th>
              <th>Password</th>
              <th>Address</th>
              <th>Sex</th>
              <th>Birthday</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.firstname}</td>
                <td>{item.fullname}</td>
                <td>{item.lastname}</td>
                <td>{item.username}</td>
                <td>{item.password}</td>
                <td>{item.address}</td>
                <td>{item.sex}</td>
                <td>{item.birthday}</td>
                <td>
                  <Link href="#" className="btn edit">Edit</Link>
                </td>
                <td>
                  <button className="btn delete">Del</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
