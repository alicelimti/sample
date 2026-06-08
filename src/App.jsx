import { useState, useEffect } from 'react'
import './App.css'

const SCHEDULE = [
  { day: '월', label: '월요일', location: '청주관', type: 'cheongju' },
  { day: '화', label: '화요일', location: '세종관',  type: 'sejong'   },
  { day: '수', label: '수요일', location: '청주관', type: 'cheongju' },
  { day: '목', label: '목요일', location: '세종관',  type: 'sejong'   },
  { day: '금', label: '금요일', location: '청주관', type: 'cheongju' },
  { day: '토', label: '토요일', location: '보강',   type: 'extra'    },
]

const CLASSES = [
  {
    level: '초등반',
    grade: '초등 1 ~ 6학년',
    brand: 'PLAYFACTO',
    desc: '플레이팩토를 활용한 재밌는 교구수학\n교과수학 + 교구수학으로\n탄탄한 기초 다지기',
    topics: ['교구수학', '교과수학', '기초 다지기'],
    blog: 'https://blog.naver.com/playfacto4977',
    color: 'linear-gradient(135deg, #3d5a80 0%, #4e6e96 100%)',
  },
  {
    level: '중등반',
    grade: '중학 1 ~ 3학년',
    brand: '',
    desc: '자기주도학습 능력을 향상시키는 맞춤 솔루션\n2학기 난해한 도형 단원\n완벽 정복',
    topics: ['자기주도학습', '도형 완벽 정복', '내신 대비'],
    blog: '',
    color: 'linear-gradient(135deg, #2a4a72 0%, #3d5a80 100%)',
  },
  {
    level: '고등반',
    grade: '고등 1 ~ 3학년',
    brand: '',
    desc: '개별 맞춤 교재로 어려운 수학을 쉽고 재미있게\n내신부터 수능까지 커버',
    topics: ['맞춤 교재', '내신 대비', '수능 완성'],
    blog: '',
    color: 'linear-gradient(135deg, #1e3a6e 0%, #2a4a72 100%)',
  },
]

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div>
      {/* ── Navigation ── */}
      <nav className={`site-nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <span className="nav-logo">세종수학전문학원</span>
          <a href="tel:043-233-3161" className="nav-tel">043-233-3161</a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-inner">
          <div className="year-block">
            <span className="year-label">FROM</span>
            <span className="year-num">2002</span>
          </div>

          <div className="hero-center">
            <div className="hero-divider" />
            <h1 className="hero-name">세종수학전문학원</h1>
            <p className="hero-sub">수학교육 전문가가 함께합니다</p>
            <a href="tel:043-233-3161" className="hero-cta">수강 상담 신청</a>
          </div>

          <div className="year-block right">
            <span className="year-label">TO</span>
            <span className="year-num">2026</span>
          </div>
        </div>

        <div className="hero-scroll">
          <span className="scroll-text">scroll</span>
          <div className="scroll-bar" />
        </div>
      </section>

      {/* 히어로 → 수업 섹션 그라데이션 구분선 */}
      <div className="section-gradient-divider" />

      {/* ── 수업 과정 ── */}
      <section className="classes-section">
        <div className="section-inner">
          <div className="section-head">
            <span className="section-label">Curriculum</span>
            <h2 className="section-title">수업 과정</h2>
            <p className="section-desc">학년별 맞춤 커리큘럼으로 수학 실력을 완성합니다</p>
          </div>
          <div className="cards">
            {CLASSES.map((cls) => (
              <div key={cls.level} className="card">
                <div className="card-top" style={{ backgroundImage: cls.color }}>
                  <p className="card-grade">{cls.grade}</p>
                  <h3 className="card-level">{cls.level}</h3>
                </div>
                <div className="card-body">
                  {cls.brand && <p className="card-brand">{cls.brand}</p>}
                  <p className="card-desc">{cls.desc}</p>
                  <div className="card-tags">
                    {cls.topics.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  {cls.blog && (
                    <a href={cls.blog} target="_blank" rel="noopener noreferrer" className="card-btn">
                      playfacto블로그
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 수업 시간표 ── */}
      <section className="schedule-section">
        <div className="section-inner">
          <div className="section-head">
            <span className="section-label">Schedule</span>
            <h2 className="section-title">수업 시간표</h2>
            <p className="section-desc">주간 수업 일정 안내</p>
          </div>
          <div className="schedule-grid">
            {SCHEDULE.map((s) => (
              <div key={s.day} className={`schedule-card schedule-${s.type}`}>
                <div className="schedule-top">
                  <span className="schedule-day">{s.day}</span>
                  <span className="schedule-label">{s.label}</span>
                </div>
                <div className="schedule-body">
                  <p className="schedule-location">{s.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <p className="footer-logo">세종수학전문학원</p>
        <p className="footer-info">Tel. 043-233-3161</p>
        <p className="footer-addr">개신동 농협사거리 갤러리타워 2층</p>
        <p className="footer-copy">© 2026 세종수학전문학원. All rights reserved.</p>
      </footer>
    </div>
  )
}
