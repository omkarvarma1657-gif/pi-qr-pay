export default function handler(req, res) {
  res.status(200).json({ ok: true, app: "Pi QR Pay", ts: Date.now() });
}
