import express from "express";
import indexRoute from "./routes/indexRoute";
require('./routes/paymentRoute');
const app = express();
app.use(express.json());
app.use('/', indexRoute);
module.exports = app;