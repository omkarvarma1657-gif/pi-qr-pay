import { PiNetwork } from "@pi-network/pi-sdk";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  if (typeof window !== "undefined") {
    PiNetwork.init({ version: "2.0" });
  }

  return <Component {...pageProps} />;
}

export default MyApp;
