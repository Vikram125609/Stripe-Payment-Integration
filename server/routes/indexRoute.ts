import express from "express";
import paymentRouter from "./paymentRoute";
const router = express.Router();
router.use("/api/v1/stripe", paymentRouter);
export default router;