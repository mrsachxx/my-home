import { useState } from 'react';
import './BanThietKeThamKhao.css';

const SOURCE_URL = 'https://maxhomevn.com/nha-o-hai-tang/';
const DRIVE_URL  = 'https://drive.google.com/drive/folders/1_M9oJ--GJGtB2bKPAx_X3noV9fWuPZqi?usp=sharing';

const videos = [
  {
    id: 'Yn9hVYTHJjw',
    startAt: 422,
    label: 'Video 1',
    code: null,
    title: 'Siêu phẩm 4K giá rẻ — nhà vườn 2 tầng mái Nhật cực đẹp',
    pills: ['2 tầng mái Nhật', 'Nhà vườn', 'Trọn gói'],
  },
  {
    id: '5hlPN0OCkhQ',
    startAt: null,
    label: 'Video 2',
    code: 'MH06235',
    title: 'Báo giá chi tiết nhà vườn mái Nhật tân cổ Maxhome 2026',
    pills: ['Báo giá 2026', 'Tân cổ điển', 'Mái Nhật'],
  },
  {
    id: 'EC6-Xw5D4Pc',
    startAt: null,
    label: 'Shorts',
    code: null,
    title: 'Nhà 2 tầng mái Nhật 7×11m',
    pills: ['7×11m', '2 tầng', 'Mái Nhật'],
    isShorts: true,
  },
];

function VideoCard({ video }) {
  const [loaded, setLoaded] = useState(false);

  const embedUrl = video.isShorts
    ? `https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`
    : `https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0${video.startAt ? `&start=${video.startAt}` : ''}`;

  return (
    <div className="featured-card">
      <div className={`video-wrap${video.isShorts ? ' video-wrap-shorts' : ''}`}>
        {loaded ? (
          <iframe
            src={embedUrl}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div
            className="video-placeholder"
            role="button"
            tabIndex={0}
            aria-label={`Xem video: ${video.title}`}
            onClick={() => setLoaded(true)}
            onKeyDown={(e) => e.key === 'Enter' && setLoaded(true)}
          >
            <img
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
              alt={`Thumbnail ${video.title}`}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }}
            />
            <div className="video-play-btn" style={{ position: 'relative', zIndex: 1 }}>
              <i className="ti ti-player-play" aria-hidden="true" />
            </div>
            <span className="video-placeholder-label" style={{ position: 'relative', zIndex: 1 }}>
              Nhấn để xem
            </span>
          </div>
        )}
      </div>

      <div className="featured-body">
        <div style={{ display: 'flex', gap: 6, marginBottom: 8, flexWrap: 'wrap' }}>
          <span className="feat-tag feat-tag-gray">{video.label}</span>
          {video.code && <span className="feat-tag feat-tag-green">{video.code}</span>}
        </div>
        <div className="featured-title">{video.title}</div>
        <div className="featured-meta">
          {video.pills.map((p) => (
            <span key={p} className="feat-pill">
              <i className="ti ti-point-filled" aria-hidden="true" />
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function BanThietKeThamKhao() {
  return (
    <div className="bttk-wrap">
      <h2 className="sr-only">Bản thiết kế tham khảo — Maxhome nhà 2 tầng mái Nhật</h2>

      {/* Hero */}
      <div className="bttk-hero">
        <p className="bttk-hero-tag">Thiết kế tham khảo</p>
        <h1 className="bttk-hero-title">Mẫu bản vẽ tham khảo</h1>
        <p className="bttk-hero-sub">Nhà vườn 2 tầng mái Nhật · Maxhome 2026</p>
      </div>

      {/* Videos */}
      <div className="bttk-section">
        <p className="bttk-label">Video mẫu</p>
      </div>

      {videos.map((v) => (
        <VideoCard key={v.id} video={v} />
      ))}

      {/* Drive link */}
      <div className="bttk-section">
        <p className="bttk-label">Tài liệu mẫu nhà</p>
      </div>

      <a className="link-card" href={DRIVE_URL} target="_blank" rel="noopener noreferrer"
        aria-label="Xem mẫu nhà trên Google Drive">
        <div className="link-icon-wrap link-icon-drive">
          <i className="ti ti-folder-open" aria-hidden="true" />
        </div>
        <div className="link-info">
          <div className="link-title">Thư mục mẫu nhà</div>
          <div className="link-url">Google Drive · Ảnh &amp; bản vẽ tham khảo</div>
        </div>
        <i className="ti ti-arrow-up-right link-arrow" aria-hidden="true" />
      </a>

      {/* Website link */}
      <div className="bttk-section">
        <p className="bttk-label">Tham khảo thêm</p>
      </div>

      <a className="link-card" href={SOURCE_URL} target="_blank" rel="noopener noreferrer"
        aria-label="Xem thêm mẫu nhà 2 tầng tại Maxhome">
        <div className="link-icon-wrap">
          <i className="ti ti-world" aria-hidden="true" />
        </div>
        <div className="link-info">
          <div className="link-title">Xem thêm mẫu nhà 2 tầng</div>
          <div className="link-url">maxhomevn.com · Nhà ở hai tầng</div>
        </div>
        <i className="ti ti-arrow-up-right link-arrow" aria-hidden="true" />
      </a>

      {/* Note */}
      <div className="note-box">
        <i className="ti ti-info-circle" aria-hidden="true" />
        <p className="note-text">
          Các mẫu trên mang tính tham khảo về phong cách, bố cục và mái Nhật.
          Bản vẽ kỹ thuật chính thức sẽ được điều chỉnh theo diện tích và yêu cầu thực tế của gia đình.
        </p>
      </div>
    </div>
  );
}

export default BanThietKeThamKhao;