import Link from 'next/link';
import './userlist.css';

export const dynamic = 'force-dynamic'; // 👈 ให้ Next ทำ SSR ทุกครั้ง (optional)

export default async function Page() {
  let items = [];

  try {
    const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users', {
      cache: 'no-store', // 👈 ป้องกันการ cache สำหรับ SSR
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    items = await res.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  }

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
                  <Link href={`/admin/users/edit/${item.id}`} className="btn edit">Edit</Link>
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
