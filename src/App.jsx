import { useState, useEffect } from 'react'
import './App.css'

const CLASSES = [
  {
    level: '초등반',
    grade: '초등 1 ~ 6학년',
    brand: 'PLAYFACTO',
    desc: '초등 교구수학으로 수학의 시작을 탄탄하게 합니다.',
    topics: ['기초 연산', '도형·측정', '규칙과 문제해결'],
    color: 'linear-gradient(135deg, #3d5a80 0%, #4e6e96 100%)',
  },
  {
    level: '중등반',
    grade: '중학 1 ~ 3학년',
    brand: '',
    desc: '중학교 수학 전 범위를 내신 중심으로 다집니다. 고등 선행을 위한 개념 완성에 초점을 맞춥니다.',
    topics: ['수와 연산', '방정식·함수', '통계·확률'],
    color: 'linear-gradient(135deg, #2a4a72 0%, #3d5a80 100%)',
  },
  {
    level: '고등반',
    grade: '고등 1 ~ 3학년',
    brand: '',
    desc: '수능·내신 완벽 대비 과정입니다. 개념 심화부터 실전 문제풀이까지 단계별로 완성합니다.',
    topics: ['수I·수II', '미적분·확통', '수능 실전'],
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
          {/* FROM 2002 */}
          <div className="year-block">
            <span className="year-label">FROM</span>
            <span className="year-num">2002</span>
          </div>

          {/* 중앙 텍스트 */}
          <div className="hero-center">
            <div className="hero-divider" />
            <h1 className="hero-name">세종수학전문학원</h1>
            <p className="hero-sub">수학교육 전문가가 함께합니다</p>
            <a href="tel:043-233-3161" className="hero-cta">수강 상담 신청</a>
          </div>

          {/* TO 2026 */}
          <div className="year-block right">
            <span className="year-label">TO</span>
            <span className="year-num">2026</span>
          </div>
        </div>

        {/* 스크롤 힌트 */}
        <div className="hero-scroll">
          <span className="scroll-text">scroll</span>
          <div className="scroll-bar" />
        </div>
      </section>

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
                  <a href="tel:043-233-3161" className="card-btn">수강 상담 신청</a>
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
        <p className="footer-copy">© 2026 세종수학전문학원. All rights reserved.</p>
      </footer>
    </div>
  )
}
