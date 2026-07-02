import './HuongNha.css';

const goodDirs = [
  { name: 'Đông Bắc', star: 'Sinh Khí' },
  { name: 'Tây Bắc',  star: 'Diên Niên' },
  { name: 'Tây',      star: 'Thiên Y' },
  { name: 'Tây Nam',  star: 'Phục Vị' },
];

const badDirs = [
  { name: 'Bắc',     star: 'Tuyệt Mệnh' },
  { name: 'Đông',    star: 'Họa Hại' },
  { name: 'Nam',     star: 'Lục Sát' },
  { name: 'Đông Nam', star: 'Ngũ Quỷ' },
];

/* Compass SVG — 8 segments, highlight good ones */
const DIRS_8 = ['B', 'ĐB', 'Đ', 'ĐN', 'N', 'TN', 'T', 'TB'];
const GOOD_SET = new Set(['ĐB', 'TB', 'T', 'TN']);

function HuongNha() {
  return (
    <div className="hn-wrap">
      <h2 className="sr-only">Hướng nhà theo phong thủy Bát trạch</h2>

      {/* Hero */}
      <div className="hn-hero">
        <p className="hn-hero-tag">Phong thủy · Bát trạch</p>
        <h1 className="hn-hero-title">Hướng nhà</h1>
        <p className="hn-hero-sub">Nam sinh 1995 · Tuổi Ất Hợi</p>
        <div className="hn-identity-row">
          <span className="hn-pill pill-teal">
            <i className="ti ti-yin-yang" aria-hidden="true" />
            Cung Khôn · Tây tứ mệnh
          </span>
          <span className="hn-pill pill-fire">
            <i className="ti ti-flame" aria-hidden="true" />
            Mệnh Sơn Đầu Hỏa
          </span>
        </div>
      </div>

      {/* Good directions */}
      <div className="hn-section">
        <p className="hn-label">Hướng hợp tuổi</p>
      </div>
      <div className="dir-grid">
        {goodDirs.map((d) => (
          <div key={d.name} className="dir-card good">
            <i className="ti ti-check dir-icon" aria-hidden="true" />
            <div className="dir-name">{d.name}</div>
            <div className="dir-star">{d.star}</div>
          </div>
        ))}
      </div>

      {/* Bad directions */}
      <div className="hn-section">
        <p className="hn-label">Hướng nên tránh</p>
      </div>
      <div className="dir-grid">
        {badDirs.map((d) => (
          <div key={d.name} className="dir-card bad">
            <i className="ti ti-x dir-icon" aria-hidden="true" />
            <div className="dir-name">{d.name}</div>
            <div className="dir-star">{d.star}</div>
          </div>
        ))}
      </div>

      {/* Bàn thờ */}
      <div className="hn-section">
        <p className="hn-label">Bàn thờ</p>
      </div>
      <div className="info-block">
        <div className="info-block-header">
          <i className="ti ti-building-temple" aria-hidden="true" />
          <span className="info-block-title">Hướng bàn thờ nên quay về</span>
        </div>
        <div className="info-block-body">
          <div className="info-row good">
            <i className="ti ti-star" aria-hidden="true" />
            <span><strong>Đông Bắc</strong> — đẹp nhất, tài lộc vượng</span>
          </div>
          <div className="info-row good">
            <i className="ti ti-check" aria-hidden="true" />
            <span>Tây Bắc · Tây · Tây Nam — đều hợp cung Khôn</span>
          </div>
          <div className="info-divider" />
          <div className="info-row note">
            <i className="ti ti-alert-triangle" aria-hidden="true" />
            <span>Vị trí cao ráo, không dưới nhà vệ sinh</span>
          </div>
          <div className="info-row note">
            <i className="ti ti-alert-triangle" aria-hidden="true" />
            <span>Không sát bếp, không đối diện cửa WC</span>
          </div>
          <div className="info-row note">
            <i className="ti ti-alert-triangle" aria-hidden="true" />
            <span>Tránh lối đi ồn ào</span>
          </div>
        </div>
      </div>

      {/* Bếp */}
      <div className="hn-section">
        <p className="hn-label">Bếp — Tọa hung hướng cát</p>
      </div>
      <div className="info-block">
        <div className="info-block-header">
          <i className="ti ti-tools-kitchen-2" aria-hidden="true" />
          <span className="info-block-title">Bố trí bếp đúng nguyên tắc</span>
        </div>
        <div className="info-block-body">
          <div className="info-row bad">
            <i className="ti ti-map-pin" aria-hidden="true" />
            <span><strong>Đặt bếp tại cung xấu:</strong> Bắc · Đông · Nam · Đông Nam</span>
          </div>
          <div className="info-divider" />
          <div className="info-row good">
            <i className="ti ti-compass" aria-hidden="true" />
            <span><strong>Quay bếp về hướng tốt:</strong> Đông Bắc · Tây Bắc · Tây · Tây Nam</span>
          </div>
        </div>
      </div>

      {/* Tip */}
      <div className="tip-box">
        <i className="ti ti-bulb" aria-hidden="true" />
        <div className="tip-text">
          <strong>Nhà hướng không hợp tuổi vẫn ở tốt</strong> nhờ xoay đúng hướng bếp, hướng bàn thờ, cửa phòng ngủ và bố trí nội thất hợp cung mệnh Khôn — Tây tứ trạch.
        </div>
      </div>
    </div>
  );
}

export default HuongNha;