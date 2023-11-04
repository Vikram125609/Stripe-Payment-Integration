import express from "express";
import cors from "cors";
import indexRoute from "./routes/indexRoute";
require("./routes/paymentRoute");
const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/", indexRoute);
module.exports = app;
