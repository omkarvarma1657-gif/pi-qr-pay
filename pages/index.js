import { useEffect, useState } from "react";
import QrReader from "react-qr-reader";

export default function Home() {
  const [pi, setPi] = useState(null);
  const [scannedQR, setScannedQR] = useState("");
  const [status, setStatus] = useState("");

  // Pi SDK initialize
  useEffect(() => {
    if (window.Pi) {
      setPi(window.Pi);
      window.Pi.init({ version: "2.0" });
    }
  }, []);

  // QR scan callback
  const handleScan = (data) => {
    if (data) {
      setScannedQR(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  // Pi payment function
  const payWithPi = async () => {
    if (!pi) {
      alert("Pi SDK not loaded!");
      return;
    }

    try {
      setStatus("Processing payment...");
      const payment = await pi.createPayment({
        amount: 1, // 1 Pi test
        memo: "QR Pay Example",
        metadata: { qr: scannedQR },
      });

      setStatus("Payment created: " + payment.identifier);
    } catch (error) {
      console.error(error);
      setStatus("Payment failed!");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>🌍 Pi QR Pay</h1>
      <p>Scan any QR and pay instantly with Pi!</p>

      <div style={{ maxWidth: 300, margin: "auto" }}>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "100%" }}
        />
      </div>

      {scannedQR && (
        <div>
          <p><b>Scanned:</b> {scannedQR}</p>
          <button
            onClick={payWithPi}
            style={{
              background: "#6c5ce7",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              marginTop: "10px",
              cursor: "pointer",
            }}
          >
            Pay with Pi
          </button>
        </div>
      )}

      {status && <p>{status}</p>}
    </div>
  );
      }
