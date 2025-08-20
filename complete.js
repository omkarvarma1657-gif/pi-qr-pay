export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const paymentData = req.body;

    // Yaha tum database update ya user ko service dene ka kaam karoge
    console.log("Payment completed:", paymentData);

    res.status(200).json({ status: "completed" });
  } catch (error) {
    console.error("Complete error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
