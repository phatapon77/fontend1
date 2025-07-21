// app/components/Navigation.js
'use client';


export default function Navigation() {
  return (

    
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
     <a className="navbar-brand" href="#">
  <img src="/bootstrap-logo.svg" alt="Logo" width={30} height={24} className="d-inline-block align-text-top" />
  DAILY
</a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">หน้าแรก</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/service">บริการ</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            เกี่ยวกับเรา
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/con">แจ้งปัญหา</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/contact" aria-disabled="true">ติดต่อเรา</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <a href="Login" class="btn relative btn-primary" data-testid="Login">
  <div class="flex items-center justify-center">Log in</div>
</a>
    </div>
  </div>
</nav>

  );
}