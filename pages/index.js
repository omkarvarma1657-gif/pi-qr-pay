export default function Home() {
  return (
    <div className="container">
      <h1>🚀 Pi QR Pay</h1>
      <p>Welcome! Choose an option:</p>
      <p>
        <a className="btn" href="/pay">📷 Scan QR</a>
      </p>
      <p>
        <a href="/api/hello">Test API</a>
      </p>
    </div>
  );
}
