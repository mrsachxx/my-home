import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { path: '/',                        label: 'Trang Chủ',         icon: 'ti-home' },
  { path: '/lich-khoi-cong',          label: 'Lịch Khởi Công',   icon: 'ti-calendar-event' },
  { path: '/huong-nha',               label: 'Hướng Nhà',        icon: 'ti-compass' },
  { path: '/ban-thiet-ke',            label: 'Bản Thiết Kế',     icon: 'ti-ruler-2' },
  { path: '/ban-thiet-ke-tham-khao',  label: 'TK Tham Khảo',    icon: 'ti-books' },
  { path: '/khao-sat-gia',            label: 'Khảo Sát Giá',     icon: 'ti-search' },
];

function Navbar() {
  const location = useLocation();

  return (
    <>
      {/* Desktop: horizontal nav bar */}
      <nav className="desktop-nav" aria-label="Điều hướng chính">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`dnav-item${isActive ? ' dnav-active' : ''}`}
              aria-current={isActive ? 'page' : undefined}
            >
              <i className={`ti ${link.icon}`} aria-hidden="true" />
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Mobile: bottom tab bar */}
      <nav className="bottom-nav" aria-label="Điều hướng chính">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`bnav-item${isActive ? ' bnav-active' : ''}`}
              aria-current={isActive ? 'page' : undefined}
            >
              <span className="bnav-icon-wrap">
                <i className={`ti ${link.icon}`} aria-hidden="true" />
                {isActive && <span className="bnav-pip" aria-hidden="true" />}
              </span>
              <span className="bnav-label">{link.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="bottom-nav-spacer" aria-hidden="true" />
    </>
  );
}

export default Navbar;