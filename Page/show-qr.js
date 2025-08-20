import { useState } from "react";

export default function ShowQR() {
  const [upiId] = useState("piuser@upi"); // Apna Pi UPI ID ya custom ID likh sakte ho

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>My QR Code</h1>
      <p>Scan this QR to send Pi</p>

      <img
        src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${upiId}`}
        alt="QR Code"
      />

      <div style={{ marginTop: "20px" }}>
        <a href="/">⬅ Back to Home</a>
      </div>
    </div>
  );
}
