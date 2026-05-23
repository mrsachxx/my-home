import { useState } from 'react';
import './KinhNghiemLamNha.css';

const BASE = process.env.PUBLIC_URL + '/videos/';

const videoCategories = [
  {
    id: 'v-tonghop',
    color: 'amber',
    icon: 'ti-layout-grid',
    label: 'Tổng hợp chung',
    videos: [
      {
        id: 'v1',
        title: '10 kích thước sai 1cm — hỏi cả đời khi thi công nhà',
        duration: '',
        thumb: null,
        src: BASE + 'tonghop-10-kich-thuoc-sai-1-cm-hoi-ca-djoi-khi-thi-cong-nha.mp4',
      },
      {
        id: 'v1b',
        title: 'Xây nhà càng nhanh càng dễ hỏng',
        duration: '',
        thumb: null,
        src: BASE + 'xay-nha-cang-nhanh-cang-de-hong.mp4',
      },
      {
        id: 'v2',
        title: '10 lưu ý quan trọng cần thỏa thuận trước với thợ ốp lát',
        duration: '04:37',
        thumb: null,
        src: BASE + '10-Luu-Y-Quan-Trong-Can-Thoa-Thuan-Truoc_Media_1476914820588967_002_720p.mp4',
      },
      {
        id: 'v2',
        title: 'Bí quyết chọn chậu rửa bát — 99% các bác không biết',
        duration: '02:16',
        thumb: null,
        src: BASE + 'Bi-quyet-chon-chau-rua-bat-99-cac-bac-kh_Media_1108324518086454_002_720p.mp4',
      },
    ],
  },
  {
    id: 'v-tho',
    color: 'blue',
    icon: 'ti-building',
    label: 'Xây thô & Trát',
    videos: [
      {
        id: 'v3',
        title: '3 lưu ý tưới nước sau khi trát tường để tránh tường ộp, rạn nứt',
        duration: '00:46',
        thumb: null,
        src: BASE + '3-luu-y-tuoi-nuoc-sau-khi-trat-tuong-de-_Media_2002229237172595_002_720p.mp4',
      },
      {
        id: 'v4',
        title: 'Tiêu chí xây cầu thang',
        duration: '00:59',
        thumb: null,
        src: BASE + 'Luu-ky-khi-lam-cong-thang-nha-minh-nhe-c_Media_782772751510873_002_720p.mp4',
      },
    ],
  },
  {
    id: 'v-diennuoc',
    color: 'purple',
    icon: 'ti-bolt',
    label: 'Điện & Nước',
    videos: [
      {
        id: 'v5',
        title: 'Ổ điện gắn sai chỗ, vừa xấu vừa nguy hiểm',
        duration: '01:28',
        thumb: null,
        src: BASE + 'O-dien-gan-sai-cho-vua-xau-vua-nguy-hiem_Media_953121323966535_002_720p.mp4',
      },
      {
        id: 'v6',
        title: 'Nhớ tìm hiểu kỹ trước khi làm 8 thứ này trong WC',
        duration: '',
        thumb: null,
        src: BASE + 'nho-tim-hieu-ky-truoc-khi-lam-8-thu-nay-trong-wc.mp4',
      },
    ],
  },
  {
    id: 'v-hoanthin',
    color: 'teal',
    icon: 'ti-paint',
    label: 'Hoàn thiện & Nội thất',
    videos: [
      {
        id: 'v8',
        title: 'Tủ áo được nhiều người lựa chọn nhất',
        duration: '00:57',
        thumb: null,
        src: BASE + 'Sau-hon-7000-du-an-thi-day-chinh-la-em-t_Media_720p.mp4',
      },
      {
        id: 'v8b',
        title: 'Sảnh vào nhà mà bừa bộn thì mất hết cả thần thái của căn nhà',
        duration: '',
        thumb: null,
        src: BASE + 'cac-bac-oi-sanh-vao-nha-ma-bua-bon-thi-mat-het-ca-than-thai-cua-can-nha-djay.mp4',
      },
      {
        id: 'v8c',
        title: 'Thời buổi nào rồi mà vẫn để bếp mặc định 80cm',
        duration: '',
        thumb: null,
        src: BASE + 'thoi-buoi-nao-roi-ma-van-dje-bep-mac-djinh-80cm.mp4',
      },
      {
        id: 'v8',
        title: 'Lát gạch mà quên 1 trong 8 điều này, toang chắc 100%',
        duration: '02:03',
        thumb: null,
        src: BASE + 'Lat-gach-ma-quen-1-trong-8-dieu-nay-toan_Media_1653629009127010_002_720p.mp4',
      },
    ],
  },
];

const tips = [
  {
    id: 'chuan-bi',
    icon: 'ti-checklist',
    color: 'blue',
    title: 'Chuẩn bị trước khi xây',
    items: [
      {
        q: 'Khảo sát địa chất trước khi làm móng',
        a: 'Đất nền yếu cần gia cố cọc hoặc móng bè. Không bỏ qua bước này dù tốn thêm 5–10 triệu — sẽ tiết kiệm hàng trăm triệu sửa chữa sau này.',
      },
      {
        q: 'Xin phép xây dựng đúng hạn',
        a: 'Nộp hồ sơ xin phép trước ít nhất 30 ngày. Cần: bản vẽ thiết kế, giấy tờ đất, CMND chủ nhà. Xây không phép bị phạt và có thể bị đình chỉ.',
      },
      {
        q: 'Chọn nhà thầu có kinh nghiệm',
        a: 'Yêu cầu xem công trình đã làm, hỏi chủ nhà cũ. Ký hợp đồng rõ ràng: tiến độ, vật liệu, bảo hành, phạt chậm tiến độ.',
      },
    ],
  },
  {
    id: 'mong',
    icon: 'ti-layers-difference',
    color: 'amber',
    title: 'Móng & Kết cấu',
    items: [
      {
        q: 'Không tiết kiệm thép và bê tông',
        a: 'Kết cấu là xương sống của ngôi nhà. Dùng thép đúng mác (CB300-V), bê tông đúng mác (M200 trở lên). Giảm thép 10% có thể giảm tuổi thọ công trình 30–40%.',
      },
      {
        q: 'Giám sát đổ bê tông trực tiếp',
        a: 'Có mặt khi đổ bê tông cột, dầm, sàn. Kiểm tra tỷ lệ nước/xi măng — thêm nước nhiều sẽ làm bê tông yếu. Bảo dưỡng bê tông ít nhất 7 ngày sau đổ.',
      },
      {
        q: 'Chống thấm từ móng',
        a: 'Quét bitum chống thấm cho tường móng tiếp xúc đất. Chi phí thấp nhưng ngăn được ẩm mốc tầng 1 về sau.',
      },
    ],
  },
  {
    id: 'vatlieu',
    icon: 'ti-package',
    color: 'teal',
    title: 'Vật liệu xây dựng',
    items: [
      {
        q: 'Mua vật liệu chính hãng, có hóa đơn',
        a: 'Xi măng, thép, gạch nên mua từ đại lý uy tín. Giữ hóa đơn để khiếu nại nếu vật liệu kém chất lượng. Tránh mua hàng "xả kho" không rõ nguồn gốc.',
      },
      {
        q: 'Dự trù vật liệu dư 5–10%',
        a: 'Gạch, gạch ốp lát nên mua dư 5–10% cùng lô để tránh lệch màu khi cần thay thế sau này.',
      },
      {
        q: 'Chọn gạch ốp lát phù hợp vị trí',
        a: 'Sân ngoài trời dùng gạch chống trơn (R10+). Toilet dùng gạch có độ hút nước thấp. Phòng khách dùng gạch bóng kính hoặc đá tự nhiên.',
      },
    ],
  },
  {
    id: 'diennuoc',
    icon: 'ti-bolt',
    color: 'purple',
    title: 'Điện & Nước',
    items: [
      {
        q: 'Lên sơ đồ điện nước trước khi xây',
        a: 'Xác định vị trí ổ cắm, công tắc, đèn, điều hòa, máy nước nóng trước khi trát tường. Thay đổi sau khi hoàn thiện tốn gấp 3–5 lần.',
      },
      {
        q: 'Dùng ống điện âm tường loại tốt',
        a: 'Ống luồn dây điện dùng loại chống cháy (HDPE hoặc PVC chống cháy). Dây điện dùng Cadivi hoặc Trần Phú, tiết diện đúng tải.',
      },
      {
        q: 'Kiểm tra áp lực nước trước khi ốp lát',
        a: 'Thử áp lực đường ống nước trước khi trát và ốp lát. Phát hiện rò rỉ sớm tránh phá gạch sau này.',
      },
    ],
  },
  {
    id: 'hoanthin',
    icon: 'ti-paint',
    color: 'teal',
    title: 'Hoàn thiện & Nội thất',
    items: [
      {
        q: 'Sơn lót trước khi sơn phủ',
        a: 'Không bỏ qua lớp sơn lót — giúp sơn phủ bám tốt hơn, màu đều hơn và tiết kiệm sơn phủ. Tường mới cần để khô ít nhất 28 ngày trước khi sơn.',
      },
      {
        q: 'Chống thấm sân thượng kỹ lưỡng',
        a: 'Dùng màng chống thấm khò nóng hoặc sơn chống thấm 2 thành phần. Thử nước 24–48 giờ trước khi lát gạch. Đây là điểm thấm phổ biến nhất.',
      },
      {
        q: 'Đặt nội thất sau khi hoàn thiện sơn',
        a: 'Tủ bếp, tủ âm tường nên đặt sau khi sơn xong để tránh bụi và dễ điều chỉnh kích thước thực tế.',
      },
    ],
  },
  {
    id: 'quanly',
    icon: 'ti-clipboard-list',
    color: 'amber',
    title: 'Quản lý & Tài chính',
    items: [
      {
        q: 'Dự phòng 10–15% ngân sách phát sinh',
        a: 'Luôn có phát sinh ngoài dự toán: thay đổi thiết kế, vật liệu tăng giá, điều kiện địa chất bất ngờ. Không dùng hết ngân sách cho phần chính.',
      },
      {
        q: 'Thanh toán theo tiến độ, không trả trước toàn bộ',
        a: 'Chia thanh toán theo 4–5 đợt gắn với mốc thi công: xong móng, xong thô, xong hoàn thiện, bàn giao. Giữ lại 5–10% bảo hành 6–12 tháng.',
      },
      {
        q: 'Ghi chép nhật ký công trình',
        a: 'Chụp ảnh hàng ngày, ghi lại vật liệu nhập, nhân công, tiến độ. Hữu ích khi có tranh chấp và để theo dõi chi phí thực tế.',
      },
    ],
  },
];

const colorMap = {
  amber:  { iconBg: '#FAEEDA', iconColor: '#854F0B', badge: '#FAEEDA', badgeText: '#633806' },
  blue:   { iconBg: '#E6F1FB', iconColor: '#185FA5', badge: '#E6F1FB', badgeText: '#0C447C' },
  teal:   { iconBg: '#E1F5EE', iconColor: '#0F6E56', badge: '#E1F5EE', badgeText: '#085041' },
  purple: { iconBg: '#EEEDFE', iconColor: '#534AB7', badge: '#EEEDFE', badgeText: '#3C3489' },
};

// ─── Video Modal ────────────────────────────────────────────────────────────
function VideoModal({ video, onClose }) {
  if (!video) return null;
  return (
    <div className="knln-modal-overlay" onClick={onClose}>
      <div className="knln-modal" onClick={(e) => e.stopPropagation()}>
        <div className="knln-modal-header">
          <span className="knln-modal-title">{video.title}</span>
          <button className="knln-modal-close" onClick={onClose} aria-label="Đóng">
            <i className="ti ti-x" aria-hidden="true" />
          </button>
        </div>
        <div className="knln-modal-body">
          <video
            key={video.id}
            controls
            autoPlay
            className="knln-video-player"
          >
            <source src={video.src} type="video/mp4" />
            Trình duyệt của bạn không hỗ trợ video.
          </video>
        </div>
      </div>
    </div>
  );
}

// ─── Tab 1: Video Library ────────────────────────────────────────────────────
function VideoTab() {
  const [openCat, setOpenCat] = useState('v-mong');
  const [activeVideo, setActiveVideo] = useState(null);

  const totalVideos = videoCategories.reduce((s, c) => s + c.videos.length, 0);

  return (
    <div>
      <p className="knln-tab-desc">
        <i className="ti ti-video" aria-hidden="true" style={{ marginRight: 6 }} />
        {totalVideos} video hướng dẫn thi công thực tế
      </p>

      <div className="knln-list">
        {videoCategories.map((cat) => {
          const c = colorMap[cat.color];
          const isOpen = openCat === cat.id;

          return (
            <div className="knln-cat" key={cat.id}>
              <button
                className={`knln-cat-header${isOpen ? ' open' : ''}`}
                onClick={() => setOpenCat(isOpen ? null : cat.id)}
                aria-expanded={isOpen}
              >
                <div className="knln-cat-icon" style={{ background: c.iconBg }}>
                  <i className={`ti ${cat.icon}`} style={{ color: c.iconColor }} aria-hidden="true" />
                </div>
                <span className="knln-cat-title">{cat.label}</span>
                <span className="knln-cat-count" style={{ background: c.badge, color: c.badgeText }}>
                  {cat.videos.length}
                </span>
                <i className={`ti ${isOpen ? 'ti-chevron-up' : 'ti-chevron-down'} knln-chevron`} aria-hidden="true" />
              </button>

              {isOpen && (
                <div className="knln-items">
                  {cat.videos.map((vid) => (
                    <button
                      key={vid.id}
                      className="knln-video-row"
                      onClick={() => setActiveVideo(vid)}
                    >
                      {/* Thumbnail */}
                      <div className="knln-video-thumb" style={{ background: c.iconBg }}>
                        <i className="ti ti-player-play-filled" style={{ color: c.iconColor, fontSize: 18 }} aria-hidden="true" />
                      </div>
                      {/* Info */}
                      <div className="knln-video-info">
                        <span className="knln-video-title">{vid.title}</span>
                        <span className="knln-video-duration">
                          <i className="ti ti-clock" aria-hidden="true" style={{ fontSize: 11, marginRight: 3 }} />
                          {vid.duration}
                        </span>
                      </div>
                      <i className="ti ti-chevron-right knln-video-arrow" aria-hidden="true" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </div>
  );
}

// ─── Tab 2: Tips Accordion ───────────────────────────────────────────────────
function TipsTab() {
  const [openCat, setOpenCat] = useState('chuan-bi');
  const [openItem, setOpenItem] = useState(null);

  const toggleCat = (id) => {
    setOpenCat((prev) => (prev === id ? null : id));
    setOpenItem(null);
  };
  const toggleItem = (key) => setOpenItem((prev) => (prev === key ? null : key));

  return (
    <div>
      <p className="knln-tab-desc">
        <i className="ti ti-bulb" aria-hidden="true" style={{ marginRight: 6 }} />
        {tips.reduce((s, t) => s + t.items.length, 0)} kinh nghiệm thực tế từ các công trình
      </p>

      <div className="knln-list">
        {tips.map((cat) => {
          const c = colorMap[cat.color];
          const isCatOpen = openCat === cat.id;

          return (
            <div className="knln-cat" key={cat.id}>
              <button
                className={`knln-cat-header${isCatOpen ? ' open' : ''}`}
                onClick={() => toggleCat(cat.id)}
                aria-expanded={isCatOpen}
              >
                <div className="knln-cat-icon" style={{ background: c.iconBg }}>
                  <i className={`ti ${cat.icon}`} style={{ color: c.iconColor }} aria-hidden="true" />
                </div>
                <span className="knln-cat-title">{cat.title}</span>
                <span className="knln-cat-count" style={{ background: c.badge, color: c.badgeText }}>
                  {cat.items.length}
                </span>
                <i className={`ti ${isCatOpen ? 'ti-chevron-up' : 'ti-chevron-down'} knln-chevron`} aria-hidden="true" />
              </button>

              {isCatOpen && (
                <div className="knln-items">
                  {cat.items.map((item, i) => {
                    const key = `${cat.id}-${i}`;
                    const isOpen = openItem === key;
                    return (
                      <div className="knln-item" key={key}>
                        <button
                          className="knln-item-q"
                          onClick={() => toggleItem(key)}
                          aria-expanded={isOpen}
                        >
                          <i className="ti ti-point-filled knln-dot" style={{ color: c.iconColor }} aria-hidden="true" />
                          <span>{item.q}</span>
                          <i className={`ti ${isOpen ? 'ti-minus' : 'ti-plus'} knln-toggle`} aria-hidden="true" />
                        </button>
                        {isOpen && <div className="knln-item-a">{item.a}</div>}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Root Component ──────────────────────────────────────────────────────────
function KinhNghiemLamNha() {
  const [activeTab, setActiveTab] = useState('video');

  return (
    <div className="knln-outer">
      {/* Header */}
      <div className="knln-header">
        <div className="knln-header-icon">
          <i className="ti ti-home-2" aria-hidden="true" />
        </div>
        <div>
          <p className="knln-header-title">Kinh Nghiệm Làm Nhà</p>
          <p className="knln-header-sub">
            {videoCategories.reduce((s, c) => s + c.videos.length, 0)} video ·{' '}
            {tips.reduce((s, t) => s + t.items.length, 0)} kinh nghiệm thực tế
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="knln-tabs">
        <button
          className={`knln-tab-btn${activeTab === 'video' ? ' active' : ''}`}
          onClick={() => setActiveTab('video')}
        >
          <i className="ti ti-video" aria-hidden="true" />
          Video hướng dẫn
        </button>
        <button
          className={`knln-tab-btn${activeTab === 'tips' ? ' active' : ''}`}
          onClick={() => setActiveTab('tips')}
        >
          <i className="ti ti-bulb" aria-hidden="true" />
          Kinh nghiệm
        </button>
      </div>

      {/* Tab content */}
      {activeTab === 'video' ? <VideoTab /> : <TipsTab />}
    </div>
  );
}

export default KinhNghiemLamNha;