import { Request, Response } from "express";
import stripe from "stripe";
const YOUR_DOMAIN: String = "http://localhost:3000";
const checkout = async (req: Request, res: Response): Promise<void> => {
  const stripeInstance = new stripe("");
  const session = await stripeInstance.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "inr",
          product_data: {
            name: "Macbook Air M1",
          },
          unit_amount: 500 * 100,
        },
        quantity: 1,
      },
    ],
    billing_address_collection: "required",
    shipping_address_collection: {
      allowed_countries: ["IN"],
    },
    mode: "payment",
    success_url: `${YOUR_DOMAIN}/success`,
    cancel_url: `${YOUR_DOMAIN}/cancel`,
  });
  res.status(200).json({ id: session.id });
};

export default { checkout };
