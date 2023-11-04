"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stripe_1 = __importDefault(require("stripe"));
const YOUR_DOMAIN = "http://localhost:3000";
const checkout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const stripeInstance = new stripe_1.default("sk_test_51O8JXTSHpUsXBYYBB6IANslh1jh1luH07iQ6ic19ksZsu70utcgOWjBqI59PTdho707kZSJ4D5o344PxXief1qot00myYOweyd");
    const session = yield stripeInstance.checkout.sessions.create({
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
});
exports.default = { checkout };
//# sourceMappingURL=paymentController.js.map