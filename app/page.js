export default function Home() {
  return (
    <main style={{
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: '#f0f8ff',
      margin: 0,
    }}>
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '40px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        textAlign: 'center',
        maxWidth: '500px',
        width: '90%',
      }}>
        <h1 style={{ color: '#007bcc', marginBottom: '10px' }}>💧 OKS Suv Termiz</h1>
        <p style={{ color: '#555', marginBottom: '20px' }}>Toza ichimlik suvi yetkazib berish xizmati</p>
        <a href="tel:+998501990400" style={{
          display: 'inline-block',
          fontSize: '1.4rem',
          fontWeight: 'bold',
          color: '#007bcc',
          textDecoration: 'none',
          border: '2px solid #007bcc',
          padding: '12px 30px',
          borderRadius: '8px',
        }}>
          +998 50 199 04 00
        </a>
      </div>
    </main>
  )
}
