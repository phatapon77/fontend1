'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import './userlist.css'; // 👈 เพิ่ม CSS ไฟล์ตรงนี้

export default function Page() {
  const [items, setItems] = useState([]);

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
    const interval = setInterval(getUsers, 5000); // fetch ทุก 5 วิ
    return () => clearInterval(interval);
  }, []);

  return (
    <>
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
    </>
  );
}
