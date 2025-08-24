import dynamic from "next/dynamic";
import { useState } from "react";

// Important: react-qr-reader must be dynamic (no SSR)
const QrReader = dynamic(() => import("react-qr-reader"), { ssr: false });

export default function Pay() {
  const [result, setResult] = useState("");

  return (
    <div className="container">
      <h2>📷 Scan QR to Pay</h2>
      <p>Allow camera permission to scan.</p>

      <div style={{ maxWidth: 320, margin: "16px auto" }}>
        <QrReader
          delay={300}
          onError={(err) => console.error(err)}
          onScan={(data) => {
            if (data) setResult(data);
          }}
          style={{ width: "100%" }}
        />
      </div>

      <p><b>Scanned:</b> {result || "—"}</p>
    </div>
  );
}
