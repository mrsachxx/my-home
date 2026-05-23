import { useState } from 'react';
import './DuToanChiPhi.css';

const categories = [
  {
    id: 'phadoMong',
    label: 'Phá dỡ & Móng',
    icon: 'ti-shovel',
    color: 'amber',
    items: [
      { name: 'Phá dỡ công trình cũ', unit: 'trọn gói', qty: 1, price: 15000000 },
      { name: 'Đào móng & đất', unit: 'm³', qty: 45, price: 180000 },
      { name: 'Bê tông móng băng', unit: 'm³', qty: 12, price: 1800000 },
      { name: 'Thép móng', unit: 'kg', qty: 800, price: 18000 },
    ],
  },
  {
    id: 'thoKet',
    label: 'Thô & Kết cấu',
    icon: 'ti-building',
    color: 'blue',
    items: [
      { name: 'Xây tường gạch', unit: 'm²', qty: 320, price: 220000 },
      { name: 'Bê tông cột, dầm, sàn', unit: 'm³', qty: 38, price: 2200000 },
      { name: 'Thép kết cấu', unit: 'kg', qty: 3200, price: 18000 },
      { name: 'Cốp pha', unit: 'm²', qty: 180, price: 120000 },
      { name: 'Trát tường trong + ngoài', unit: 'm²', qty: 480, price: 85000 },
    ],
  },
  {
    id: 'hoanthin',
    label: 'Hoàn thiện',
    icon: 'ti-paint',
    color: 'teal',
    items: [
      { name: 'Ốp lát gạch nền', unit: 'm²', qty: 120, price: 350000 },
      { name: 'Ốp lát toilet', unit: 'm²', qty: 40, price: 420000 },
      { name: 'Sơn tường trong nhà', unit: 'm²', qty: 480, price: 55000 },
      { name: 'Sơn ngoại thất', unit: 'm²', qty: 160, price: 75000 },
      { name: 'Trần thạch cao', unit: 'm²', qty: 90, price: 280000 },
    ],
  },
  {
    id: 'cuaKhung',
    label: 'Cửa & Khung',
    icon: 'ti-door',
    color: 'purple',
    items: [
      { name: 'Cửa chính nhôm kính', unit: 'bộ', qty: 1, price: 18000000 },
      { name: 'Cửa phòng gỗ HDF', unit: 'cái', qty: 8, price: 3500000 },
      { name: 'Cửa sổ nhôm kính', unit: 'cái', qty: 10, price: 2800000 },
      { name: 'Cổng sắt', unit: 'bộ', qty: 1, price: 12000000 },
    ],
  },
  {
    id: 'mep',
    label: 'Điện & Nước',
    icon: 'ti-bolt',
    color: 'amber',
    items: [
      { name: 'Hệ thống điện âm tường', unit: 'trọn gói', qty: 1, price: 45000000 },
      { name: 'Hệ thống cấp thoát nước', unit: 'trọn gói', qty: 1, price: 28000000 },
      { name: 'Thiết bị vệ sinh', unit: 'bộ', qty: 3, price: 8000000 },
      { name: 'Bình nóng lạnh', unit: 'cái', qty: 2, price: 4500000 },
    ],
  },
  {
    id: 'maiNgoai',
    label: 'Mái & Ngoại thất',
    icon: 'ti-home',
    color: 'teal',
    items: [
      { name: 'Mái bê tông sân thượng', unit: 'm²', qty: 60, price: 450000 },
      { name: 'Chống thấm toàn bộ', unit: 'm²', qty: 200, price: 120000 },
      { name: 'Sân trước + lối đi', unit: 'm²', qty: 20, price: 380000 },
    ],
  },
];

const colorMap = {
  amber:  { bg: '#FAEEDA', text: '#633806', iconBg: '#FAEEDA', iconColor: '#854F0B' },
  blue:   { bg: '#E6F1FB', text: '#0C447C', iconBg: '#E6F1FB', iconColor: '#185FA5' },
  teal:   { bg: '#E1F5EE', text: '#085041', iconBg: '#E1F5EE', iconColor: '#0F6E56' },
  purple: { bg: '#EEEDFE', text: '#3C3489', iconBg: '#EEEDFE', iconColor: '#534AB7' },
};

function fmt(n) {
  return n.toLocaleString('vi-VN') + ' đ';
}

function DuToanChiPhi() {
  const [open, setOpen] = useState({});

  const toggle = (id) => setOpen((prev) => ({ ...prev, [id]: !prev[id] }));

  const grandTotal = categories.reduce(
    (sum, cat) => sum + cat.items.reduce((s, it) => s + it.qty * it.price, 0),
    0
  );

  return (
    <div className="dtcp-outer">
      {/* Header */}
      <div className="dtcp-header">
        <div className="dtcp-header-icon">
          <i className="ti ti-calculator" aria-hidden="true" />
        </div>
        <div>
          <p className="dtcp-header-title">Dự Toán Chi Phí</p>
          <p className="dtcp-header-sub">Ước tính sơ bộ · {categories.length} hạng mục</p>
        </div>
      </div>

      {/* Total banner */}
      <div className="dtcp-total-banner">
        <span className="dtcp-total-label">Tổng dự toán</span>
        <span className="dtcp-total-value">{fmt(grandTotal)}</span>
      </div>

      {/* Categories */}
      <div className="dtcp-list">
        {categories.map((cat) => {
          const catTotal = cat.items.reduce((s, it) => s + it.qty * it.price, 0);
          const c = colorMap[cat.color];
          const isOpen = !!open[cat.id];

          return (
            <div className="dtcp-cat" key={cat.id}>
              <button
                className="dtcp-cat-header"
                onClick={() => toggle(cat.id)}
                aria-expanded={isOpen}
              >
                <div className="dtcp-cat-icon" style={{ background: c.iconBg }}>
                  <i className={`ti ${cat.icon}`} style={{ color: c.iconColor }} aria-hidden="true" />
                </div>
                <span className="dtcp-cat-label">{cat.label}</span>
                <span className="dtcp-cat-total" style={{ background: c.bg, color: c.text }}>
                  {fmt(catTotal)}
                </span>
                <i className={`ti ${isOpen ? 'ti-chevron-up' : 'ti-chevron-down'} dtcp-chevron`} aria-hidden="true" />
              </button>

              {isOpen && (
                <div className="dtcp-items">
                  <table className="dtcp-tbl">
                    <thead>
                      <tr>
                        <th>Hạng mục</th>
                        <th>ĐVT</th>
                        <th>SL</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cat.items.map((it, i) => (
                        <tr key={i}>
                          <td>{it.name}</td>
                          <td className="dtcp-center">{it.unit}</td>
                          <td className="dtcp-center">{it.qty.toLocaleString('vi-VN')}</td>
                          <td className="dtcp-right">{it.price.toLocaleString('vi-VN')}</td>
                          <td className="dtcp-right dtcp-bold">{fmt(it.qty * it.price)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p className="dtcp-footer">* Giá ước tính, chưa bao gồm nội thất và phát sinh. Cần khảo sát thực tế để có báo giá chính xác.</p>
    </div>
  );
}

export default DuToanChiPhi;
