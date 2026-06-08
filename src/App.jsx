import './App.css'

function App() {
  return (
    <div>
      <header style={{
        background: 'var(--dark-blue)',
        color: 'var(--white)',
        padding: '1.5rem 2rem',
        fontFamily: 'var(--font-family)',
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
