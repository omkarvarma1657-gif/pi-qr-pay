import { useState } from "react";
import dynamic from "next/dynamic";

// react-qr-reader ko dynamic import karte hain taaki Next.js build error na de
const QrReader = dynamic(() => import("react-qr-reader"), { ssr: false });

export default function ScanQR() {
  const [scanned, setScanned] = useState("");

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>📷 Scan QR Code</h1>
      <QrReader
        delay={300}
        onError={(err) => console.error(err)}
        onScan={(data) => {
          if (data) setScanned(data);
        }}
        style={{ width: "300px" }}
      />
      <p>
        {scanned ? (
          <>
            ✅ Scanned Result: <b>{scanned}</b>
          </>
        ) : (
          "Align QR code inside the box"
        )}
      </p>
    </div>
  );
}
