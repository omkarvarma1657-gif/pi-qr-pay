export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Pi servers se payment info verify karne ka example
    const paymentData = req.body;

    // Yaha tum apne DB ya server-side check karoge
    console.log("Payment to approve:", paymentData);

    // For now, hum seedha approve kar rahe
    res.status(200).json({ status: "approved" });
  } catch (error) {
    console.error("Approve error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
