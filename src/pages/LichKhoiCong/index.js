import './LichKhoiCong.css';

const events = [
  {
    id: 1,
    dateMain: 'Mùng 6 tháng 5',
    dateSub: 'âm lịch',
    time: '6:20 sáng',
    badge: { label: 'Phá dỡ', icon: 'ti-hammer', color: 'b-teal' },
    note: null,
    gapAfter: '5 ngày',
  },
  {
    id: 2,
    dateMain: '11 tháng 5',
    dateSub: 'âm lịch',
    time: '6:10 sáng',
    badge: { label: 'Động thổ', icon: 'ti-shovel', color: 'b-purple' },
    note: 'xong móng ngày nào đổ ngày đó',
    gapAfter: '27 ngày',
  },
  {
    id: 3,
    dateMain: 'Mùng 8 tháng 6',
    dateSub: 'âm lịch',
    time: '5:05 sáng',
    badge: { label: 'Đổ trần tầng 1', icon: 'ti-layers-difference', color: 'b-teal' },
    note: null,
    gapAfter: '20 ngày',
  },
  {
    id: 4,
    dateMain: '28 tháng 6',
    dateSub: 'âm lịch',
    time: '5:05 sáng',
    badge: { label: 'Đổ trần tầng 2', icon: 'ti-layers-difference', color: 'b-teal' },
    note: null,
    gapAfter: '33 ngày',
  },
  {
    id: 5,
    dateMain: 'Mùng 1 tháng 8',
    dateSub: 'âm lịch',
    time: '6:10 sáng',
    badge: { label: 'Đổ tum', icon: 'ti-home', color: 'b-purple' },
    note: 'còn mái xong ngày nào đặt nóc ngày đó',
    gapAfter: null,
  },
];

function LichKhoiCong() {
  return (
    <div className="lkc-outer">
      {/* Header */}
      <div className="lkc-header">
        <div className="lkc-header-icon">
          <i className="ti ti-building" aria-hidden="true" />
        </div>
        <div>
          <p className="lkc-header-title">Mượn Tuổi 1944 — Ông</p>
          <p className="lkc-header-sub">Lịch xây dựng theo âm lịch · 5 sự kiện</p>
        </div>
      </div>

      {/* Table card */}
      <div className="lkc-card">
        <table className="lkc-tbl">
          <thead>
            <tr>
              <th style={{ width: 52 }}>#</th>
              <th style={{ width: '30%' }}>Ngày âm lịch</th>
              <th style={{ width: '22%' }}>Giờ</th>
              <th>Sự kiện</th>
            </tr>
          </thead>
          <tbody>
            {events.map((ev) => (
              <>
                <tr className="lkc-data-row" key={ev.id}>
                  <td><div className="lkc-num">{ev.id}</div></td>
                  <td>
                    <div className="lkc-date-main">{ev.dateMain}</div>
                    <div className="lkc-date-sub">{ev.dateSub}</div>
                  </td>
                  <td>
                    <div className="lkc-time-wrap">
                      <i className="ti ti-clock" aria-hidden="true" />
                      {ev.time}
                    </div>
                  </td>
                  <td>
                    <span className={`lkc-badge ${ev.badge.color}`}>
                      <i className={`ti ${ev.badge.icon}`} aria-hidden="true" style={{ fontSize: 11 }} />
                      {ev.badge.label}
                    </span>
                    {ev.note && <div className="lkc-note">{ev.note}</div>}
                  </td>
                </tr>

                {ev.gapAfter && (
                  <tr className="lkc-gap-row" key={`gap-${ev.id}`}>
                    <td colSpan={4}>
                      <div className="lkc-gap-inner">
                        <div className="lkc-gap-line" />
                        <div className="lkc-gap-pill">
                          <i className="ti ti-arrow-down" aria-hidden="true" style={{ fontSize: 11 }} />
                          {ev.gapAfter}
                        </div>
                        <div className="lkc-gap-line" />
                      </div>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>

      <p className="lkc-footer">* Khoảng cách tính theo ngày âm lịch giữa các sự kiện liên tiếp.</p>
    </div>
  );
}

export default LichKhoiCong;
