export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🚀 Pi QR Pay</h1>
      <p>Welcome! Choose an option:</p>
      <ul>
        <li><a href="/app">🔑 Login with Pi</a></li>
        <li><a href="/scan-qr">📷 Scan QR</a></li>
      </ul>
    </div>
  );
}
