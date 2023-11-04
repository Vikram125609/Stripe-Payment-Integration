import { Request, Response } from "express";
import stripe from "stripe";
const YOUR_DOMAIN: String = "http://localhost:3000";
const checkout = async (req: Request, res: Response): Promise<void> => {
  const stripeInstance = new stripe(
    "sk_test_utcgOWjBqI59PTdho707kZSJ4D5o344PxXief1qot00myYOweyd"
  );
  const session = await stripeInstance.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Macbook Air M1",
          },
          unit_amount: 50 * 100,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}/success`,
    cancel_url: `${YOUR_DOMAIN}/cancel`,
  });
  res.status(200).json({ id: session.id });
};

export default { checkout };
