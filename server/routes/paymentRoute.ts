import express from "express";
import paymentController from "../controllers/paymentController";
const router = express.Router();
router.get("/checkout", paymentController.checkout);
export default router ;