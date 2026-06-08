import './App.css'

function App() {
  return (
    <div>
      <header style={{
        background: 'var(--dark-blue)',
        color: 'var(--white)',
        padding: '1rem 2rem',
        textAlign: 'center',
        fontFamily: 'var(--font-family)',
      }}>
        <h1 style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 900 }}>
          수학 전문학원
        </h1>
        <p style={{ color: 'var(--pink)', marginTop: '0.5rem' }}>
          2002년 개원 · 초중고 수학 전문
        </p>
      </header>
      <main style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        fontFamily: 'var(--font-family)',
      }}>
        <p style={{ color: 'var(--gray-600)' }}>개발을 시작합니다 🚀</p>
      </main>
    </div>
  )
}

export default App
