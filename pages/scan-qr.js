import { useState } from "react";

export default function ScanQR() {
  const [scannedData, setScannedData] = useState("");

  // Dummy scan function (aage chal ke real scanner add karenge)
  function handleScan() {
    setScannedData("upi://pay?pa=piuser@upi&pn=PiUser&am=10");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Scan & Pay</h1>
      <p>Click below to simulate scanning a QR</p>

      <button
        onClick={handleScan}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        📷 Scan QR
      </button>

      {scannedData && (
        <div style={{ marginTop: "20px" }}>
          <p><b>Scanned Payment Link:</b></p>
          <a href={scannedData}>{scannedData}</a>
        </div>
      )}

      <div style={{ marginTop: "20px" }}>
        <a href="/">⬅ Back to Home</a>
      </div>
    </div>
  );
}
