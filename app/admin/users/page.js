'use client';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'

export default function User() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); // <-- เพิ่ม state loading
  const router = useRouter();

  useEffect(() => {

    const token = localStorage.getItem('token');
     if (!token) {
       router.push('/login');
       return;
     }

    async function getUsers() {
      try {
        const res = await fetch('https://backend-nextjs-virid.vercel.app/api/users');
        if (!res.ok) {
          console.error('Failed to fetch data');
          return;
        }
        const data = await res.json();
        setItems(data);
        setLoading(false); // <-- โหลดเสร็จแล้ว
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }
 
  getUsers()
  const interval  = setInterval(getUsers, 1000);
  return () => clearInterval(interval);
}, []);

const handleDelete = async (id) => {
  //console.log('user id :', id);
  try {
    const res = await fetch(`https://backend-nextjs-virid.vercel.app/api/users/${id}`, {
      method: 'DELETE',
      headers: {
        Accept : 'application/json',
      },
    });
    const result = await res.json();
    console.log(result);

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}; //end handleDelete

 // ถ้า loading ให้ return null หรือข้อความ loading
 if (loading) {
  return <div className='text-center'><h1>Loading...</h1></div>; // หรือ return null เพื่อไม่ให้ render อะไร
}

  return (
    <>
    <br /><br /><br /><br />
    <div className="container">
      <div className="card">
  <div className="card-header">
    Users List
  </div>
  <div className="card-body">
  <div className="row">
      <table className="table table-striped table-hover table-responsive">
        <thead>
          <tr>
            <th className='col-md-2 text-center'>#</th>
            <th className='col-md-4'>Firstname</th>
            <th className='col-md-4'>Fullname</th>
            <th className='col-md-4'>Lastname</th>
            <th className='col-md-4'>Username</th>
            {/* <th className='col-md-4'>Password</th> */}
            <th className='col-md-4'>Address</th>
            <th className='col-md-4'>Sex</th>
            <th className='col-md-4'>Birthday</th>
            <th className='col-md-1'>Eidt</th>
            <th className='col-md-1'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className='text-center'>{item.id}</td>
              <td>{item.firstname}</td>
              <td>{item.fullname}</td>
              <td>{item.lastname}</td>
              <td>{item.username}</td>
              {/* <td>{item.password}</td> */}
              <td>{item.address}</td>
              <td>{item.sex}</td>
              <td>{item.birthday}</td>
              <td><Link href={`/admin/users/edit/${item.id}`} className="btn btn-warning">Edit</Link></td>
              <td><button className="btn btn-pill btn-danger" type="button" onClick={() => handleDelete(item.id)}><i className="fa fa-trash"></i>Del</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>

    </div>
    </div>
    <br /><br />

    </>
  );
}