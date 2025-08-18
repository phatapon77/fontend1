// app/components/Navigation.js
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavLink({ href, children, exact = false }) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname?.startsWith(href || '');
  return (
    <Link href={href} className={`nav-link${isActive ? ' active' : ''}`}>
      {children}
    </Link>
  );
}

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" href="/">
          <i className="bi bi-journal-richtext me-2"></i>
          <span className="fw-semibold">DAILY</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink href="/" exact>
                <i className="bi bi-house-door me-1"></i>
                หน้าแรก
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="/service">
                <i className="bi bi-briefcase me-1"></i>
                บริการ
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-people me-1"></i>
                เกี่ยวกับเรา
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="/about">
                    <i className="bi bi-info-circle me-2"></i>
                    เกี่ยวกับเรา
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/contact">
                    <i className="bi bi-chat-dots me-2"></i>
                    ติดต่อ/แจ้งปัญหา
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <form className="d-flex me-lg-3 mb-2 mb-lg-0" role="search" onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control form-control-sm me-2"
              type="search"
              placeholder="ค้นหา..."
              aria-label="Search"
            />
            <button className="btn btn-sm btn-light" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>

          <div className="d-flex gap-2">
            <Link href="/login" className="btn btn-sm btn-outline-light">
              <i className="bi bi-box-arrow-in-right me-1"></i>
              เข้าสู่ระบบ
            </Link>
            <Link href="/register" className="btn btn-sm btn-warning text-dark">
              <i className="bi bi-person-plus me-1"></i>
              สมัครสมาชิก
            </Link>
            <Link href="/admin/users" className="btn btn-sm btn-light">
              <i className="bi bi-gear me-1"></i>
              Admin
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
