import { useState, useMemo } from "react";

const data = [
  {
    province: "Ninh Bình",
    color: "teal",
    icon: "🏯",
    records: [
      {
        id: "nb1",
        title: "Nhà 3 gian, mái Nhật, 2 tầng",
        area: "230 m²",
        totalCost: "~1,7 tỷ",
        year: "2024",
        basic: [
          { key: "Loại nhà", val: "Nhà 3 gian, mái Nhật, 2 tầng" },
          { key: "Kích thước", val: "Mặt tiền 12×8 m" },
          { key: "Công năng", val: "4 phòng ngủ, 2 nhà vệ sinh" },
          { key: "Diện tích xây dựng", val: "~230 m²" },
          { key: "Tổng chi phí", val: "~1 tỷ 608 triệu + 5% dự phòng ≈ 1,7 tỷ VNĐ" },
        ],
        tho: [
          { key: "Nhân công xây dựng", val: "1.200.000 đ/m²" },
          { key: "Nhân công điện nước", val: "120.000 đ/m²" },
          { key: "Gạch xây", val: "1.900 đ/viên" },
          { key: "Cát xây", val: "550.000 đ/khối" },
          { key: "Cát vàng", val: "900.000 đ/khối" },
          { key: "Bê tông tươi (Mác 300)", val: "1.500.000 đ/khối" },
          { key: "Vật tư điện nước", val: "~150.000.000 đ" },
        ],
        hoanThien: [
          { key: "Ngói lợp mái (trung bình)", val: "650.000 đ/m²" },
          { key: "Chống thấm sàn vệ sinh", val: "350.000 đ/m²" },
          { key: "Chống thấm ban công, bồn hoa", val: "300.000 đ/m²" },
          { key: "Sơn ngoài nhà", val: "95.000 đ/m²" },
          { key: "Sơn trong nhà", val: "80.000 đ/m²" },
          { key: "Gạch ốp lát sàn", val: "350.000 đ/m²" },
          { key: "Gạch ốp chân tường (12 phân)", val: "350.000 đ/m²" },
          { key: "Gạch chống trơn ban công", val: "270.000 đ/m²" },
          { key: "Cửa nhôm kính (1 ly 4)", val: "2.200.000 đ/m²" },
          { key: "Cửa nhôm kính (1 ly 2)", val: "1.800.000 đ/m²" },
          { key: "Trần thạch cao (chưa sơn bả)", val: "300.000 đ/m²" },
          { key: "Khung xương thạch cao, vách tường", val: "280.000 đ/m²" },
          { key: "Đá ốp cầu thang & sảnh (đá đen rừng)", val: "1.100.000 đ/m²" },
          { key: "Lan can cầu thang", val: "1.500.000 đ/mét dài" },
          { key: "Thiết bị vệ sinh (2 phòng)", val: "15.000.000 đ" },
        ],
      },
    ],
  },
  {
    province: "Hà Nội",
    color: "blue",
    icon: "🏙️",
    records: [
    ],
  },
  {
    province: "TP. Hồ Chí Minh",
    color: "purple",
    icon: "🌆",
    records: [
    ],
  },
];

const palette = {
  teal: { pill: "#d0f0e4", pillText: "#0a5a45", accent: "#1D9E75", light: "#e8f8f2" },
  blue: { pill: "#d0e8fa", pillText: "#0d3d6e", accent: "#2176c8", light: "#eaf3fd" },
  purple: { pill: "#e0defc", pillText: "#352e82", accent: "#5c56cc", light: "#f0eff e" },
  amber: { pill: "#fde8c2", pillText: "#6b3a08", accent: "#c97d10", light: "#fdf4e7" },
};

const sectionMeta = [
  { key: "basic", label: "Thông tin cơ bản", icon: "📋" },
  { key: "tho", label: "Phần thô & nhân công", icon: "🏗️" },
  { key: "hoanThien", label: "Phần hoàn thiện", icon: "🎨" },
];

function ChevronIcon({ open }) {
  return (
    <svg
      width="16" height="16" viewBox="0 0 16 16" fill="none"
      style={{ transition: "transform 0.22s ease", transform: open ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}
    >
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="6.5" cy="6.5" r="4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 10l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function RecordDetail({ record, color }) {
  const [openSection, setOpenSection] = useState("basic");
  const pal = palette[color] || palette.teal;

  return (
    <div style={{
      padding: "16px 18px 18px",
      background: "#fafafa",
      borderTop: "1px solid #f0f0f0",
      animation: "fadeSlide 0.18s ease",
    }}>
      <style>{`@keyframes fadeSlide{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}`}</style>

      {/* Summary chips */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
        {[
          { label: "Diện tích", val: record.area, icon: "📐" },
          { label: "Chi phí", val: record.totalCost, icon: "💰" },
          { label: "Năm KS", val: record.year, icon: "📅" },
        ].map(chip => (
          <div key={chip.label} style={{
            display: "flex", alignItems: "center", gap: 6,
            background: "#fff", border: "1px solid #ebebeb",
            borderRadius: 8, padding: "5px 11px", fontSize: 12,
          }}>
            <span>{chip.icon}</span>
            <span style={{ color: "#888" }}>{chip.label}</span>
            <span style={{ fontWeight: 600, color: "#222" }}>{chip.val}</span>
          </div>
        ))}
      </div>

      {/* Section tabs */}
      <div style={{ display: "flex", gap: 4, marginBottom: 12 }}>
        {sectionMeta.map(s => (
          <button
            key={s.key}
            onClick={() => setOpenSection(openSection === s.key ? null : s.key)}
            style={{
              display: "flex", alignItems: "center", gap: 5,
              padding: "5px 12px", borderRadius: 7, fontSize: 12, fontWeight: 500,
              border: openSection === s.key ? `1.5px solid ${pal.accent}` : "1px solid #e5e5e5",
              background: openSection === s.key ? pal.light : "#fff",
              color: openSection === s.key ? pal.pillText : "#555",
              cursor: "pointer", transition: "all 0.15s",
            }}
          >
            <span>{s.icon}</span>
            {s.label}
          </button>
        ))}
      </div>

      {/* Section content */}
      {sectionMeta.map(s => openSection === s.key && (
        <div key={s.key} style={{ animation: "fadeSlide 0.15s ease" }}>
          {record[s.key].map((item, i) => (
            <div key={i} style={{
              display: "flex", justifyContent: "space-between", alignItems: "baseline",
              padding: "6px 8px", borderRadius: 6,
              background: i % 2 === 0 ? "#fff" : "transparent",
              gap: 12,
            }}>
              <span style={{ fontSize: 12.5, color: "#555", flex: 1 }}>{item.key}</span>
              <span style={{ fontSize: 12.5, fontWeight: 600, color: "#1a1a1a", whiteSpace: "nowrap" }}>{item.val}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function RecordRow({ record, color }) {
  const [open, setOpen] = useState(false);
  const pal = palette[color] || palette.teal;

  return (
    <div style={{ borderBottom: "1px solid #f3f3f3" }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          display: "flex", alignItems: "center", gap: 10,
          width: "100%", padding: "11px 16px 11px 44px",
          background: open ? pal.light : "transparent",
          border: "none", cursor: "pointer", textAlign: "left",
          transition: "background 0.15s",
        }}
      >
        <span style={{
          fontSize: 11, fontWeight: 600, padding: "2px 9px", borderRadius: 99,
          background: pal.pill, color: pal.pillText, whiteSpace: "nowrap", flexShrink: 0,
        }}>
          {record.area}
        </span>
        <span style={{ flex: 1, fontSize: 13, color: "#1a1a1a", fontWeight: 500 }}>
          {record.title}
        </span>
        <span style={{ fontSize: 12, color: "#888", whiteSpace: "nowrap", marginRight: 4 }}>
          {record.totalCost}
        </span>
        <span style={{ color: "#aaa" }}><ChevronIcon open={open} /></span>
      </button>

      {open && <RecordDetail record={record} color={color} />}
    </div>
  );
}

function ProvinceGroup({ province, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const pal = palette[province.color] || palette.teal;

  return (
    <div style={{
      background: "#fff",
      border: "1px solid #ebebeb",
      borderRadius: 14,
      overflow: "hidden",
      boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          display: "flex", alignItems: "center", gap: 11,
          width: "100%", padding: "13px 16px",
          background: "none", border: "none", cursor: "pointer", textAlign: "left",
        }}
      >
        <div style={{
          width: 36, height: 36, borderRadius: 9,
          background: pal.pill, display: "flex", alignItems: "center",
          justifyContent: "center", fontSize: 18, flexShrink: 0,
        }}>
          {province.icon}
        </div>
        <span style={{ flex: 1, fontSize: 14, fontWeight: 600, color: "#111" }}>
          {province.province}
        </span>
        <span style={{
          fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 99,
          background: pal.pill, color: pal.pillText,
        }}>
          {province.records.length} công trình
        </span>
        <span style={{ color: "#bbb", marginLeft: 2 }}><ChevronIcon open={open} /></span>
      </button>

      {open && (
        <div style={{ borderTop: "1px solid #f3f3f3" }}>
          {province.records.map(r => (
            <RecordRow key={r.id} record={r} color={province.color} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function KhaoSatGia() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return data;
    const q = query.toLowerCase().trim();
    return data
      .map(p => ({
        ...p,
        records: p.records.filter(r =>
          r.title.toLowerCase().includes(q) ||
          p.province.toLowerCase().includes(q) ||
          r.area.toLowerCase().includes(q) ||
          r.totalCost.toLowerCase().includes(q)
        ),
      }))
      .filter(p => p.records.length > 0);
  }, [query]);

  const totalRecords = filtered.reduce((a, p) => a + p.records.length, 0);

  return (
    <div style={{ padding: "1.5rem", maxWidth: 680, margin: "0 auto", fontFamily: "system-ui, sans-serif" }}>

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1.25rem" }}>
        <div style={{
          width: 42, height: 42, borderRadius: "50%",
          background: "#E1F5EE", display: "flex", alignItems: "center",
          justifyContent: "center", fontSize: 20, flexShrink: 0,
        }}>
          🗺️
        </div>
        <div>
          <p style={{ fontSize: 17, fontWeight: 600, color: "#111", margin: 0 }}>
            Khảo Sát Giá Xây Dựng
          </p>
          <p style={{ fontSize: 12, color: "#888", margin: "2px 0 0" }}>
            Dữ liệu thực tế · {totalRecords} công trình · {filtered.length} tỉnh thành
          </p>
        </div>
      </div>

      {/* Search */}
      <div style={{
        display: "flex", alignItems: "center", gap: 8,
        background: "#f6f6f6", border: "1px solid #e8e8e8",
        borderRadius: 10, padding: "0 12px", marginBottom: "1.25rem",
      }}>
        <span style={{ color: "#aaa", display: "flex" }}><SearchIcon /></span>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Tìm theo tỉnh, loại nhà, diện tích..."
          style={{
            border: "none", background: "none", outline: "none",
            flex: 1, fontSize: 13, color: "#222", padding: "10px 0",
          }}
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#aaa", padding: 0, fontSize: 16, lineHeight: 1 }}
          >
            ×
          </button>
        )}
      </div>

      {/* Province list */}
      {filtered.length === 0 ? (
        <div style={{ textAlign: "center", padding: "2.5rem 0", color: "#aaa" }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>🔍</div>
          <p style={{ fontSize: 13, margin: 0 }}>Không tìm thấy kết quả phù hợp</p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {filtered.map(p => (
            <ProvinceGroup
              key={p.province}
              province={p}
              defaultOpen={!!query.trim()}
            />
          ))}
        </div>
      )}

      <p style={{ fontSize: 11, color: "#aaa", marginTop: "1rem", fontStyle: "italic" }}>
        * Giá khảo sát thực tế từ các công trình đã thi công. Chỉ mang tính tham khảo.
      </p>
    </div>
  );
}