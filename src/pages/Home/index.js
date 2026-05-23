import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const progressSteps = [
  { label: 'Khảo sát', state: 'active' },
  { label: 'Thiết kế', state: 'pending' },
  { label: 'Phê duyệt', state: 'pending' },
  { label: 'Khởi công', state: 'pending' },
  { label: 'Hoàn thiện', state: 'pending' },
];

const cards = [
  {
    path: '/lich-khoi-cong',
    color: 'teal',
    icon: 'ti-calendar-event',
    title: 'Lịch khởi công',
    desc: 'Mùng 6 tháng 5 âm\nPhá dỡ 6:20 sáng',
    badge: 'Dương lịch 23/6/2026',
  },
  {
    path: '/huong-nha',
    color: 'amber',
    icon: 'ti-compass',
    title: 'Hướng nhà',
    desc: 'Hướng Nam · Phong thủy cát tường, đón gió mát',
    badge: 'Đã xác nhận',
  },
  {
    path: '/ban-thiet-ke',
    color: 'blue',
    icon: 'ti-ruler-2',
    title: 'Bản thiết kế',
    desc: 'Bản vẽ kỹ thuật chính thức, 12 trang',
    badge: 'Chờ hoàn thiện',
  },
  {
    path: '/ban-thiet-ke-tham-khao',
    color: 'purple',
    icon: 'ti-books',
    title: 'Thiết kế tham khảo',
    desc: '8 mẫu nhà phố hiện đại đã chọn lọc',
    badge: '8 mẫu',
  },
  {
    path: '/du-toan-chi-phi',
    color: 'teal',
    icon: 'ti-calculator',
    title: 'Dự toán chi phí',
    desc: 'Ước tính sơ bộ theo từng hạng mục',
    badge: '6 hạng mục',
  },
  {
    path: '/kinh-nghiem-lam-nha',
    color: 'amber',
    icon: 'ti-bulb',
    title: 'Kinh nghiệm làm nhà',
    desc: 'Tổng hợp kinh nghiệm thực tế từ A–Z',
    badge: '6 chủ đề',
  },
  {
    path: '/khao-sat-gia',
    color: 'blue',
    icon: 'ti-search',
    title: 'Khảo sát giá',
    desc: 'Tổng hợp giá vật liệu và nhân công',
    badge: 'Đang cập nhật',
  },
];

const upcomingEvents = [
  {
    dayLabel: 'M6',
    monLabel: 'Th5 âm',
    title: 'Phá Dỡ',
    sub: '6 giờ 20\' sáng · Giờ hoàng đạo',
    tag: 'Phá Dỡ',
    highlight: true,
    boxStyle: {},
    dayStyle: {},
    monStyle: {},
    tagStyle: { background: '#FAEEDA', color: '#633806' },
  },
  {
    dayLabel: '11',
    monLabel: 'Th5 âm',
    title: 'Động Thổ',
    sub: '6 giờ 10\' sáng · Giờ hoàng đạo',
    tag: 'Động Thổ',
    highlight: false,
    boxStyle: { background: '#EEEDFE' },
    dayStyle: { color: '#3C3489' },
    monStyle: { color: '#534AB7' },
    tagStyle: { background: '#EEEDFE', color: '#3C3489' },
  },
  {
    dayLabel: 'M8',
    monLabel: 'Th6 âm',
    title: 'Đổ Trần Tầng 1',
    sub: '5 giờ 5\' sáng · Giờ hoàng đạo',
    tag: 'Đổ Trần T.1',
    highlight: false,
    boxStyle: { background: '#E1F5EE' },
    dayStyle: { color: '#085041' },
    monStyle: { color: '#0F6E56' },
    tagStyle: { background: '#E1F5EE', color: '#085041' },
  },
  {
    dayLabel: '28',
    monLabel: 'Th6 âm',
    title: 'Đổ Trần Tầng 2',
    sub: '5 giờ 5\' sáng · Giờ hoàng đạo',
    tag: 'Đổ Trần T.2',
    highlight: false,
    boxStyle: { background: '#E1F5EE' },
    dayStyle: { color: '#085041' },
    monStyle: { color: '#0F6E56' },
    tagStyle: { background: '#E1F5EE', color: '#085041' },
  },
  {
    dayLabel: 'M1',
    monLabel: 'Th8 âm',
    title: 'Đổ Tum',
    sub: '6 giờ 10\' sáng · Giờ hoàng đạo',
    tag: 'Đổ Tum',
    highlight: false,
    boxStyle: { background: '#EEEDFE' },
    dayStyle: { color: '#3C3489' },
    monStyle: { color: '#534AB7' },
    tagStyle: { background: '#EEEDFE', color: '#3C3489' },
  },
];

function Home() {
  const pbarRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (pbarRef.current) pbarRef.current.style.width = '10%';
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-wrap">
      <h2 className="sr-only">Trang chủ dự án xây dựng nhà ở Nguyễn Đăng Sách</h2>

      {/* Hero */}
      <div className="hero">
        <p className="hero-tag">Dự án xây dựng</p>
        <h1 className="hero-title">
          Nhà ở gia đình<br />Nguyễn Đăng Sách
        </h1>
        <p className="hero-sub">Khởi công 23/6/2026 · Hoàn thành dự kiến Q4/2026</p>
        <div className="hero-meta">
          <div className="meta-pill">
            <i className="ti ti-map-pin" aria-hidden="true" /> Bắc Ninh
          </div>
          <div className="meta-pill">
            <i className="ti ti-ruler-2" aria-hidden="true" /> 200 m²
          </div>
          <div className="meta-pill">
            <i className="ti ti-building" aria-hidden="true" /> 2 tầng mái nhật
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="section-label-wrap">
        <p className="section-label">Tiến độ tổng thể</p>
      </div>
      <div className="progress-bar-wrap">
        <div className="progress-header">
          <span className="progress-label">Đang khảo sát</span>
          <span className="progress-pct">10%</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" ref={pbarRef} />
        </div>
        <div className="progress-steps">
          {progressSteps.map((s) => (
            <div key={s.label} className={`pstep ${s.state}`}>
              <div className="pstep-dot" />
              {s.label}
            </div>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="section" style={{ paddingTop: 0 }}>
        <p className="section-label">Thông tin chính</p>
        <div className="cards-grid">
          {cards.map((card) => (
            <div
              key={card.path}
              className={`card card-${card.color}`}
              onClick={() => navigate(card.path)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate(card.path)}
              aria-label={card.title}
            >
              <i className="ti ti-arrow-up-right card-arrow" aria-hidden="true" />
              <div className="card-icon-wrap">
                <i className={`ti ${card.icon}`} aria-hidden="true" />
              </div>
              <div className="card-title">{card.title}</div>
              <div className="card-desc">
                {card.desc.split('\n').map((line, i) => (
                  <span key={i}>{line}{i < card.desc.split('\n').length - 1 && <br />}</span>
                ))}
              </div>
              <span className={`card-badge card-${card.color}`}>{card.badge}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming */}
      <div className="upcoming-label-wrap">
        <p className="section-label">Sự kiện sắp tới</p>
      </div>
      <div className="upcoming">
        {upcomingEvents.map((ev, i) => (
          <div
            key={i}
            className={`upcoming-item${ev.highlight ? ' highlight-row' : ''}`}
          >
            <div className="date-box" style={ev.boxStyle}>
              <div className="date-day" style={ev.dayStyle}>{ev.dayLabel}</div>
              <div className="date-mon" style={ev.monStyle}>{ev.monLabel}</div>
            </div>
            <div>
              <div className="event-title">{ev.title}</div>
              <div className="event-sub">{ev.sub}</div>
            </div>
            <span className="event-tag" style={ev.tagStyle}>{ev.tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
