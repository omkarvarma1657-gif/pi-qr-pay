import { Pi } from "@pi-network/pi-sdk";
import { useEffect } from "react";

export default function AppPage() {
  useEffect(() => {
    Pi.init({ version: "2.0" });
  }, []);

  const login = async () => {
    try {
      const scopes = ["username", "payments"];
      const user = await Pi.authenticate(scopes, onIncompletePaymentFound);
      console.log("Logged in user:", user);
      alert(`Welcome ${user.username}`);
    } catch (err) {
      console.error(err);
    }
  };

  function onIncompletePaymentFound(payment) {
    console.log("Incomplete payment:", payment);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>🔑 Pi App Login</h1>
      <button onClick={login}>Login with Pi</button>
    </div>
  );
}
