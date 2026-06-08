import './App.css'

const classes = [
  {
    level: '초등반',
    grade: '초등 1 ~ 6학년',
    desc: '수학의 기초 개념을 탄탄하게 잡아주는 과정입니다. 연산, 도형, 측정 등 핵심 영역을 체계적으로 학습합니다.',
    topics: ['기초 연산', '도형·측정', '규칙과 문제해결'],
    color: 'var(--royal-blue)',
  },
  {
    level: '중등반',
    grade: '중학 1 ~ 3학년',
    desc: '중학교 수학 전 범위를 내신 중심으로 다집니다. 고등 선행을 위한 개념 완성에 초점을 맞춥니다.',
    topics: ['수와 연산', '방정식·함수', '통계·확률'],
    color: 'var(--royal-blue-dark)',
  },
  {
    level: '고등반',
    grade: '고등 1 ~ 3학년',
    desc: '수능·내신 완벽 대비 과정입니다. 개념 심화부터 실전 문제풀이까지 단계별로 완성합니다.',
    topics: ['수I·수II', '미적분·확통', '수능 실전'],
    color: 'var(--dark-blue)',
  },
]

function App() {
  return (
    <div style={{ fontFamily: 'var(--font-family)', minHeight: '100vh', background: 'var(--off-white)' }}>

      {/* 헤더 */}
      <header style={{
        background: 'var(--dark-blue)',
        color: 'var(--white)',
        padding: '1.5rem 2rem',
      }}>
        <h1 style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 900 }}>
          세종수학전문학원
        </h1>
        <p style={{
          fontSize: 'var(--font-size-sm)',
          color: 'var(--gray-400)',
          marginTop: '0.35rem',
        }}>
          043-233-3161
        </p>
      </header>

      {/* 수업 카테고리 */}
      <main style={{ padding: '3rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{
            fontSize: 'var(--font-size-3xl)',
            fontWeight: 900,
            color: 'var(--dark-blue)',
            marginBottom: '0.5rem',
          }}>
            수업 과정
          </h2>
          <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--gray-600)' }}>
            학년별 맞춤 커리큘럼으로 수학 실력을 완성합니다
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {classes.map((cls) => (
            <div key={cls.level} style={{
              background: 'var(--white)',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              flexDirection: 'column',
            }}>
              {/* 카드 상단 컬러 배너 */}
              <div style={{
                background: cls.color,
                padding: '1.75rem 1.5rem',
                color: 'var(--white)',
              }}>
                <p style={{
                  fontSize: 'var(--font-size-sm)',
                  color: 'rgba(255,255,255,0.7)',
                  marginBottom: '0.25rem',
                }}>
                  {cls.grade}
                </p>
                <h3 style={{
                  fontSize: 'var(--font-size-4xl)',
                  fontWeight: 900,
                  letterSpacing: '-0.5px',
                }}>
                  {cls.level}
                </h3>
              </div>

              {/* 카드 본문 */}
              <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <p style={{ fontSize: 'var(--font-size-md)', color: 'var(--gray-600)', lineHeight: 1.7 }}>
                  {cls.desc}
                </p>

                {/* 주요 학습 영역 태그 */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                  {cls.topics.map((topic) => (
                    <span key={topic} style={{
                      fontSize: 'var(--font-size-sm)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--border-radius-full)',
                      background: 'var(--gray-100)',
                      color: 'var(--gray-800)',
                      fontWeight: 500,
                    }}>
                      {topic}
                    </span>
                  ))}
                </div>

                {/* 상담 신청 버튼 */}
                <a href={`tel:043-233-3161`} style={{
                  display: 'block',
                  textAlign: 'center',
                  marginTop: '0.5rem',
                  padding: '0.75rem',
                  background: 'var(--pink)',
                  color: 'var(--white)',
                  fontWeight: 700,
                  fontSize: 'var(--font-size-md)',
                  borderRadius: 'var(--border-radius-md)',
                  transition: 'background 0.2s',
                }}>
                  수강 상담 신청
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
