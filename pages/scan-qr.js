import { useState } from "react";
import QrReader from "react-qr-reader";

export default function ScanQR() {
  const [data, setData] = useState("No result");

  return (
    <div style={{ padding: "20px" }}>
      <h1>📷 QR Scanner</h1>
      <QrReader
        delay={300}
        onError={(err) => console.error(err)}
        onScan={(result) => {
          if (result) setData(result);
        }}
        style={{ width: "300px" }}
      />
      <p>Scanned Result: {data}</p>
    </div>
  );
}
