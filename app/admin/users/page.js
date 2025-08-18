import Link from 'next/link';

export const dynamic = 'force-dynamic'; // ให้ Next ทำ SSR ทุกครั้ง (optional)

export default async function Page() {
  let items = [];

  try {
    const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users', {
      cache: 'no-store', // ป้องกันการ cache สำหรับ SSR
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    items = await res.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  const maskPassword = (pwd) => {
    const len = (pwd || '').length || 6;
    return '•'.repeat(Math.min(len, 8));
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-header d-flex align-items-center justify-content-between">
              <div>
                <h5 className="mb-0"><i className="bi bi-people me-2"></i>รายชื่อผู้ใช้</h5>
                <small className="text-muted">ทั้งหมด {items?.length || 0} รายการ</small>
              </div>
              <div className="d-flex gap-2">
                <Link href="/register" className="btn btn-sm btn-primary">
                  <i className="bi bi-person-plus me-1"></i>
                  เพิ่มผู้ใช้
                </Link>
              </div>
            </div>

            <div className="card-body">
              {!items || items.length === 0 ? (
                <div className="alert alert-warning mb-0 d-flex align-items-center" role="alert">
                  <i className="bi bi-exclamation-triangle me-2"></i>
                  ไม่พบข้อมูลผู้ใช้หรือเกิดข้อผิดพลาดในการดึงข้อมูล
                </div>
              ) : (
                <div className="table-responsive">
                  <table className="table table-hover table-striped align-middle">
                    <thead className="table-light">
                      <tr>
                        <th style={{width: '60px'}}>#</th>
                        <th>Firstname</th>
                        <th>Fullname</th>
                        <th>Lastname</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Address</th>
                        <th>Sex</th>
                        <th>Birthday</th>
                        <th style={{width: '80px'}} className="text-center">Edit</th>
                        <th style={{width: '90px'}} className="text-center">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item) => (
                        <tr key={item.id}>
                          <td><span className="badge bg-secondary">#{item.id}</span></td>
                          <td>{item.firstname || '-'}</td>
                          <td>{item.fullname || '-'}</td>
                          <td>{item.lastname || '-'} </td>
                          <td><span className="fw-semibold">{item.username || '-'}</span></td>
                          <td><span className="text-muted">{maskPassword(item.password)}</span></td>
                          <td className="text-truncate" style={{maxWidth: '220px'}}>{item.address || '-'}</td>
                          <td>
                            {item.sex ? (
                              <span className="badge bg-info text-dark">{item.sex}</span>
                            ) : (
                              <span className="text-muted">-</span>
                            )}
                          </td>
                          <td>{item.birthday || '-'}</td>
                          <td className="text-center">
                            <Link href={`/admin/users/edit/${item.id}`} className="btn btn-sm btn-outline-primary">
                              <i className="bi bi-pencil-square"></i>
                            </Link>
                          </td>
                          <td className="text-center">
                            <button type="button" className="btn btn-sm btn-outline-danger" disabled title="ยังไม่พร้อมใช้งาน">
                              <i className="bi bi-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
