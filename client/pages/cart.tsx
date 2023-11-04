import { Inter } from "next/font/google";
import { loadStripe } from "@stripe/stripe-js";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const initCheckout = async () => {
    const stripe = await loadStripe(
      ""
    );

    const response = await fetch(
      "http://localhost:8080/api/v1/stripe/checkout",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      }
    );
    const session = await response.json();
    const result = stripe?.redirectToCheckout({ sessionId: session.id });
    console.log(result);
  };
  return (
    <>
      <button onClick={initCheckout}>Checkout</button>
    </>
  );
}
