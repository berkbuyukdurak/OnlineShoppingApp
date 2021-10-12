import express from "express";
import CustomerRouter from "./customer.router";

const router = express.Router();

router.use("/customers", CustomerRouter);

export default router;