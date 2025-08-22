// app/components/Navigation.js
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavLink({ href, children, exact = false }) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname?.startsWith(href || '');
  return (
    <Link href={href} className={`nav-link neon-link${isActive ? ' active' : ''}`}>
      {children}
    </Link>
  );
}

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-future sticky-top" data-bs-theme="dark">
      <div className="container py-2">
        <Link className="navbar-brand d-flex align-items-center brand-future" href="/">
          <i className="bi bi-journal-richtext me-2"></i>
          <span className="fw-semibold">DAILY</span>
        </Link>

        <button
          className="navbar-toggler toggler-future"
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
                className="nav-link dropdown-toggle neon-link"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-people me-1"></i>
                เกี่ยวกับเรา
              </a>
              <ul className="dropdown-menu dropdown-menu-dark dropdown-future">
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
              className="form-control form-control-sm me-2 neon-input"
              type="search"
              placeholder="ค้นหา..."
              aria-label="Search"
            />
            <button className="btn btn-sm btn-neo" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>

          <div className="d-flex gap-2">
            <Link href="/login" className="btn btn-sm btn-neo">
              <i className="bi bi-box-arrow-in-right me-1"></i>
              เข้าสู่ระบบ
            </Link>
            <Link href="/register" className="btn btn-sm btn-neo btn-neo-accent">
              <i className="bi bi-person-plus me-1"></i>
              สมัครสมาชิก
            </Link>
            <Link href="/admin/users" className="btn btn-sm btn-neo btn-neo-subtle">
              <i className="bi bi-gear me-1"></i>
              Admin
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(:root) {
          --neo-1: #00e5ff; /* cyan */
          --neo-2: #2979ff; /* blue */
          --neo-3: #00b7ff; /* cyan-strong */
          --glass: #e6edf3;
          --glass-2: #e6edf3;
          --border: rgba(255, 255, 255, 0.14);
          --text: #e6edf3;
          --bg-dark: rgba(10, 12, 17, 0.75);
        }

        /* Futuristic navbar base */
        .navbar-future {
          position: sticky;
          top: 0;
          background: linear-gradient(180deg, rgba(0, 34, 119, 1), rgba(0, 72, 255, 1));
          backdrop-filter: blur(12px) saturate(120%);
          -webkit-backdrop-filter: blur(12px) saturate(120%);
          border-bottom: 1px solid var(--border);
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.35);
          overflow: clip;
        }
        .navbar-future::before {
          content: '';
          position: absolute;
          left: -30vw;
          right: -30vw;
          top: -40%;
          height: 200%;
          pointer-events: none;
          background:
            radial-gradient(60vw 10rem at 10% 0%, rgba(0, 229, 255, 0.45), transparent 60%),
            radial-gradient(60vw 10rem at 90% 0%, rgba(41, 121, 255, 0.45), transparent 60%);
          filter: blur(40px);
          opacity: 0.38;
        }

        /* Brand */
        .brand-future {
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: linear-gradient(90deg, #b3e5fc 0%, #90caf9 50%, #64b5f6 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 0 18px rgba(41, 121, 255, 0.35);
        }

        /* Links */
        .neon-link {
          position: relative;
          color: var(--text);
          padding: 0.6rem 0.9rem;
          border-radius: 0.75rem;
          transition: color 120ms ease, transform 120ms ease, background 180ms ease, box-shadow 180ms ease;
          isolation: isolate;
        }
        .neon-link::after {
          content: '';
          position: absolute;
          left: 0.9rem;
          right: 0.9rem;
          bottom: 0.4rem;
          height: 2px;
          background: linear-gradient(90deg, var(--neo-1), var(--neo-2));
          opacity: 0.0;
          transform: scaleX(0.3);
          transform-origin: left;
          transition: opacity 240ms ease, transform 240ms ease;
          border-radius: 2px;
        }
        .neon-link:hover {
          color: #ffffff;
          transform: translateY(-1px);
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02));
          box-shadow: 0 0 0 1px var(--border) inset, 0 6px 20px rgba(0, 0, 0, 0.25);
        }
        .neon-link:hover::after { opacity: 0.9; transform: scaleX(1); }
        .neon-link.active { color: #fff; }
        .neon-link.active::after { opacity: 1; transform: scaleX(1); }

        /* Dropdown */
        .dropdown-future {
          border: 1px solid var(--border);
          background: linear-gradient(180deg, rgba(18, 22, 30, 0.92), rgba(16, 19, 27, 0.86));
          backdrop-filter: blur(10px) saturate(120%);
          -webkit-backdrop-filter: blur(10px) saturate(120%);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.04) inset;
          border-radius: 0.8rem;
          overflow: hidden;
        }
        :global(.dropdown-menu .dropdown-item) {
          color: var(--text);
        }
        :global(.dropdown-menu .dropdown-item:hover),
        :global(.dropdown-menu .dropdown-item:focus) {
          background: linear-gradient(90deg, rgba(41, 121, 255, 0.2), rgba(0, 229, 255, 0.2));
          color: #fff;
        }

        /* Search */
        .neon-input {
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));
          border: 1px solid var(--border);
          color: var(--text);
          border-radius: 0.7rem;
          outline: none;
          box-shadow: 0 1px 0 rgba(255, 255, 255, 0.05) inset;
        }
        .neon-input::placeholder { color: #9fb0c3; }
        .neon-input:focus {
          border-color: #3d88ff;
          box-shadow: 0 0 0 3px rgba(41, 121, 255, 0.28), 0 8px 24px rgba(0, 0, 0, 0.45);
        }

        /* Buttons */
        .btn-neo {
          --btn-bg: linear-gradient(180deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.03));
          --btn-brd: var(--border);
          color: var(--text);
          border: 1px solid var(--btn-brd);
          background: var(--btn-bg);
          border-radius: 0.7rem;
          padding-inline: 0.85rem;
          transition: transform 120ms ease, box-shadow 180ms ease, background 180ms ease, border-color 180ms ease;
          box-shadow: 0 1px 0 rgba(255, 255, 255, 0.04) inset, 0 0 0 0 rgba(0, 0, 0, 0);
        }
        .btn-neo:hover {
          transform: translateY(-1px);
          border-color: #37e0ff;
          box-shadow: 0 0 0 2px rgba(0, 229, 255, 0.22), 0 10px 28px rgba(0, 0, 0, 0.45);
        }
        .btn-neo:active { transform: translateY(0); box-shadow: none; }

        /* Accent */
        .btn-neo-accent {
          --btn-bg: linear-gradient(135deg, rgba(0, 229, 255, 0.25), rgba(41, 121, 255, 0.25));
          --btn-brd: rgba(41, 121, 255, 0.5);
          color: #0b0e14;
          text-shadow: 0 1px 0 rgba(255, 255, 255, 0.35);
        }
        .btn-neo-accent:hover {
          box-shadow: 0 0 0 3px rgba(41, 121, 255, 0.25), 0 18px 36px rgba(41, 121, 255, 0.35);
        }

        /* Subtle */
        .btn-neo-subtle { opacity: 0.9; }

        /* Toggler */
        .toggler-future {
          border-color: var(--border);
          border-radius: 0.7rem;
          padding: 0.4rem 0.6rem;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
          box-shadow: 0 1px 0 rgba(255, 255, 255, 0.05) inset;
        }
        .toggler-future:hover { box-shadow: 0 0 0 2px rgba(0, 229, 255, 0.22); }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .neon-link, .btn-neo { transition: none; }
          .neon-link::after { transition: none; }
        }
      `}</style>
    </nav>
  );
}
