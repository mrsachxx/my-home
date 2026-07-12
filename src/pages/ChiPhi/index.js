import { useState } from 'react';
import './ChiPhi.css';

// Dữ liệu lấy từ file "Hóa đơn.xlsx" (2 sheet: "sắt xi", "cát sỏi")
const xiMangItems = [
  { date: '02/07/2026', name: 'Xi shinhan C91', unit: 'kg', qty: 500, price: 1360 },
  { date: '02/07/2026', name: 'hanson PC40', unit: 'kg', qty: 500, price: 1610 },
  { date: '02/07/2026', name: 'Xi shinhan C91', unit: 'kg', qty: 1000, price: 1360 },
  { date: '07/07/2026', name: 'hanson PC40', unit: 'kg', qty: 7000, price: 1610 },
  { date: '07/07/2026', name: 'hanson PC40', unit: 'kg', qty: 2100, price: 1610 },
];

const satThepItems = [
  { date: '05/07/2026', name: 'D6', unit: 'kg', qty: 25.6, price: 15800 },
  { date: '05/07/2026', name: 'Đai 17*17', unit: 'cái', qty: 160, price: 500 },
  { date: '05/07/2026', name: 'D8', unit: 'kg', qty: 294, price: 15800 },
  { date: '05/07/2026', name: 'Đai 25*25', unit: 'cái', qty: 420, price: 500 },
  { date: '05/07/2026', name: 'D12', unit: 'kg', qty: 42, price: 159000 },
  { date: '05/07/2026', name: 'D14', unit: 'kg', qty: 26, price: 216000 },
  { date: '05/07/2026', name: 'D18', unit: 'kg', qty: 16, price: 357000 },
  { date: '05/07/2026', name: 'D20', unit: 'kg', qty: 43, price: 442000 },
  { date: '05/07/2026', name: 'D6', unit: 'kg', qty: 50.8, price: 15800 },
  { date: '05/07/2026', name: 'Dây', unit: 'kg', qty: 20, price: 25000 },
  { date: '05/07/2026', name: 'D10', unit: 'kg', qty: 10, price: 100000 },
  { date: '06/07/2026', name: 'D6', unit: 'kg', qty: 10.3, price: 15800 },
  { date: '06/07/2026', name: 'Đai 16*25', unit: 'cái', qty: 50, price: 500 },
  { date: '06/07/2026', name: 'D8', unit: 'kg', qty: 49, price: 15800 },
  { date: '06/07/2026', name: 'Đai 25*55', unit: 'cái', qty: 70, price: 500 },
  { date: '06/07/2026', name: 'D8', unit: 'kg', qty: 14, price: 15800 },
  { date: '06/07/2026', name: 'Đai C25', unit: 'cái', qty: 100, price: 500 },
  { date: '06/07/2026', name: 'D12', unit: 'kg', qty: 10, price: 159000 },
  { date: '06/07/2026', name: 'D18', unit: 'kg', qty: 2, price: 357000 },
];

// Sheet "Trang tính3" — ép cọc bê tông (đã thanh toán)
const cocRow = {
  date: '29/06/2026',
  paidDate: '12/07/2026',
  metCoc: 6,
  dauCoc: 52,
  tongSoLuong: 312,
  donGia: 155000,
  thanhTien: 48360000,
  congTho: 11000000,
  giam: 360000,
  tongTien: 59000000,
};

// Ứng trước công thợ (đã thanh toán)
const congThoUngRow = {
  date: '12/07/2026',
  amount: 50000000,
};

const catSoiItems = [
  { date: '02/07/2026', name: 'Sỏi', unit: 'Khối', qty: 3, price: 750000, note: '' },
  { date: '02/07/2026', name: 'Cát vàng', unit: 'Khối', qty: 3, price: 750000, note: '' },
  { date: '02/07/2026', name: 'Cát đen', unit: 'Khối', qty: 3, price: 300000, note: 'Chở công nông' },
  { date: '08/07/2026', name: 'Sỏi', unit: 'Khối', qty: 14, price: 740000, note: '' },
  { date: '08/07/2026', name: 'Cát vàng', unit: 'Khối', qty: 21, price: 740000, note: '' },
  { date: '11/07/2026', name: 'Cát đen', unit: 'Khối', qty: 7, price: 250000, note: '' },
];

const tabs = [
  { id: 'satXi', label: 'Sắt & Xi măng', icon: 'ti-building-bridge-2' },
  { id: 'coc', label: 'Cọc', icon: 'ti-stack-2' },
  { id: 'congTho', label: 'Công thợ', icon: 'ti-users' },
  { id: 'catSoi', label: 'Cát & Sỏi', icon: 'ti-triangle' },
  { id: 'chiTiet', label: 'Chi tiết', icon: 'ti-list-details' },
];

function fmt(n) {
  return Math.round(n).toLocaleString('vi-VN') + ' đ';
}

function sum(items) {
  return items.reduce((s, it) => s + it.qty * it.price, 0);
}

function ChiPhi() {
  const [tab, setTab] = useState('satXi');

  const xiMangTotal = sum(xiMangItems);
  const satThepTotal = sum(satThepItems);
  const satXiTotal = xiMangTotal + satThepTotal;
  const cocTotal = cocRow.tongTien;
  const congThoUngTotal = congThoUngRow.amount;
  const paidTotal = satXiTotal + cocTotal + congThoUngTotal;
  const catSoiTotal = sum(catSoiItems);
  const grandTotal = paidTotal + catSoiTotal;

  const chiTietRows = [
    {
      date: cocRow.date,
      name: `Ép cọc bê tông (${cocRow.metCoc}m × ${cocRow.dauCoc} đầu cọc = ${cocRow.tongSoLuong}m)`,
      note: `Thanh toán ${cocRow.paidDate}`,
      unit: 'trọn gói',
      qty: 1,
      price: cocRow.tongTien,
      loai: 'Cọc',
      paid: true,
    },
    {
      date: congThoUngRow.date,
      name: 'Ứng tiền công thợ',
      unit: 'trọn gói',
      qty: 1,
      price: congThoUngRow.amount,
      loai: 'Công thợ',
      paid: true,
    },
    ...xiMangItems.map((it) => ({ ...it, loai: 'Xi măng', paid: true })),
    ...satThepItems.map((it) => ({ ...it, loai: 'Sắt thép', paid: true })),
    ...catSoiItems.map((it) => ({ ...it, loai: 'Cát/Sỏi', paid: false })),
  ].sort((a, b) => {
    if (!a.date && !b.date) return 0;
    if (!a.date) return -1;
    if (!b.date) return 1;
    const [d1, m1, y1] = a.date.split('/').map(Number);
    const [d2, m2, y2] = b.date.split('/').map(Number);
    return new Date(y1, m1 - 1, d1) - new Date(y2, m2 - 1, d2);
  });

  const renderGroup = (title, items, groupTotal, withNote) => (
    <div className="chp-group" key={title}>
      <div className="chp-group-head">
        <span className="chp-group-title">{title}</span>
        <span className="chp-group-total">{fmt(groupTotal)}</span>
      </div>
      <div className="chp-tbl-wrap">
        <table className="chp-tbl">
          <thead>
            <tr>
              <th>Ngày</th>
              <th>Vật liệu</th>
              <th>ĐVT</th>
              <th>SL</th>
              <th>Đơn giá</th>
              <th>Thành tiền</th>
              {withNote && <th>Ghi chú</th>}
            </tr>
          </thead>
          <tbody>
            {items.map((it, i) => (
              <tr key={i}>
                <td className="chp-center">{it.date}</td>
                <td>{it.name}</td>
                <td className="chp-center">{it.unit}</td>
                <td className="chp-center">{it.qty.toLocaleString('vi-VN')}</td>
                <td className="chp-right">{it.price.toLocaleString('vi-VN')}</td>
                <td className="chp-right chp-bold">{fmt(it.qty * it.price)}</td>
                {withNote && <td className="chp-note">{it.note}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="chp-outer">
      {/* Header */}
      <div className="chp-header">
        <div className="chp-header-icon">
          <i className="ti ti-receipt-2" aria-hidden="true" />
        </div>
        <div>
          <p className="chp-header-title">Chi Phí</p>
          <p className="chp-header-sub">Theo hóa đơn thực tế · {chiTietRows.length} khoản mua</p>
        </div>
      </div>

      {/* Total banner */}
      <div className="chp-total-banner">
        <div className="chp-total-row">
          <span className="chp-total-label">Tổng chi phí</span>
          <span className="chp-total-value">{fmt(grandTotal)}</span>
        </div>
        <div className="chp-total-split">
          <div className="chp-split-item">
            <span className="chp-dot chp-dot-paid" />
            <span>Đã thanh toán</span>
            <b>{fmt(paidTotal)}</b>
          </div>
          <div className="chp-split-item">
            <span className="chp-dot chp-dot-unpaid" />
            <span>Chưa thanh toán</span>
            <b>{fmt(catSoiTotal)}</b>
          </div>
        </div>
      </div>

      {/* Tab switcher */}
      <div className="chp-tabs" role="tablist">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tab === t.id}
            className={`chp-tab${tab === t.id ? ' chp-tab-active' : ''}`}
            onClick={() => setTab(t.id)}
          >
            <i className={`ti ${t.icon}`} aria-hidden="true" />
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {tab === 'satXi' && (
        <div className="chp-panel">
          <div className="chp-status-bar chp-status-paid">
            <i className="ti ti-circle-check" aria-hidden="true" />
            Đã thanh toán · {fmt(satXiTotal)}
          </div>
          {renderGroup('Xi măng', xiMangItems, xiMangTotal, false)}
          {renderGroup('Sắt thép', satThepItems, satThepTotal, false)}
        </div>
      )}

      {tab === 'coc' && (
        <div className="chp-panel">
          <div className="chp-status-bar chp-status-paid">
            <i className="ti ti-circle-check" aria-hidden="true" />
            Đã thanh toán {cocRow.paidDate} · {fmt(cocTotal)}
          </div>
          <div className="chp-group">
            <div className="chp-group-head">
              <span className="chp-group-title">Ép cọc bê tông · Ép ngày {cocRow.date}</span>
              <span className="chp-group-total">{fmt(cocTotal)}</span>
            </div>
            <div className="chp-tbl-wrap">
              <table className="chp-tbl">
                <thead>
                  <tr>
                    <th>Mét cọc</th>
                    <th>Đầu cọc</th>
                    <th>Tổng số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                    <th>Công thợ</th>
                    <th>Giảm</th>
                    <th>Tổng tiền</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="chp-center">{cocRow.metCoc}</td>
                    <td className="chp-center">{cocRow.dauCoc}</td>
                    <td className="chp-center">{cocRow.tongSoLuong.toLocaleString('vi-VN')}</td>
                    <td className="chp-right">{cocRow.donGia.toLocaleString('vi-VN')}</td>
                    <td className="chp-right">{cocRow.thanhTien.toLocaleString('vi-VN')}</td>
                    <td className="chp-right">{cocRow.congTho.toLocaleString('vi-VN')}</td>
                    <td className="chp-right">{cocRow.giam.toLocaleString('vi-VN')}</td>
                    <td className="chp-right chp-bold">{fmt(cocRow.tongTien)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {tab === 'congTho' && (
        <div className="chp-panel">
          <div className="chp-status-bar chp-status-paid">
            <i className="ti ti-circle-check" aria-hidden="true" />
            Đã thanh toán · {congThoUngRow.date} · {fmt(congThoUngTotal)}
          </div>
          <div className="chp-group">
            <div className="chp-group-head">
              <span className="chp-group-title">Ứng tiền công thợ · {congThoUngRow.date}</span>
              <span className="chp-group-total">{fmt(congThoUngTotal)}</span>
            </div>
            <div className="chp-tbl-wrap">
              <table className="chp-tbl">
                <thead>
                  <tr>
                    <th>Ngày</th>
                    <th>Nội dung</th>
                    <th>Số tiền</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="chp-center">{congThoUngRow.date}</td>
                    <td>Ứng tiền công thợ</td>
                    <td className="chp-right chp-bold">{fmt(congThoUngRow.amount)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {tab === 'catSoi' && (
        <div className="chp-panel">
          <div className="chp-status-bar chp-status-unpaid">
            <i className="ti ti-alert-circle" aria-hidden="true" />
            Chưa thanh toán · {fmt(catSoiTotal)}
          </div>
          {renderGroup('Cát & Sỏi', catSoiItems, catSoiTotal, true)}
        </div>
      )}

      {tab === 'chiTiet' && (
        <div className="chp-panel">
          <div className="chp-tbl-wrap">
            <table className="chp-tbl">
              <thead>
                <tr>
                  <th>Ngày</th>
                  <th>Loại</th>
                  <th>Vật liệu</th>
                  <th>ĐVT</th>
                  <th>SL</th>
                  <th>Đơn giá</th>
                  <th>Thành tiền</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {chiTietRows.map((it, i) => (
                  <tr key={i}>
                    <td className="chp-center">{it.date || '—'}</td>
                    <td className="chp-center">{it.loai}</td>
                    <td>
                      {it.name}
                      {it.note ? <span className="chp-inline-note"> ({it.note})</span> : null}
                    </td>
                    <td className="chp-center">{it.unit}</td>
                    <td className="chp-center">{it.qty.toLocaleString('vi-VN')}</td>
                    <td className="chp-right">{it.price.toLocaleString('vi-VN')}</td>
                    <td className="chp-right chp-bold">{fmt(it.qty * it.price)}</td>
                    <td className="chp-center">
                      <span className={`chp-chip ${it.paid ? 'chp-chip-paid' : 'chp-chip-unpaid'}`}>
                        {it.paid ? 'Đã TT' : 'Chưa TT'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={6} className="chp-right chp-bold">Tổng cộng</td>
                  <td className="chp-right chp-bold">{fmt(grandTotal)}</td>
                  <td />
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}

      <p className="chp-footer">* Số liệu tổng hợp từ hóa đơn thực tế (ép cọc, công thợ, sắt, xi măng, cát, sỏi), chưa bao gồm các hạng mục khác.</p>
    </div>
  );
}

export default ChiPhi;
