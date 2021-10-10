import express from "express";
import AddCustomerController from "../controllers/addCustomer";

const router = express.Router();

/**
 * Add Customer Route
 */
router.get("/addCustomer", async (_req, res) => {
    const addCustomerController = new AddCustomerController();
    const addCustomerResponse = await addCustomerController.getMessage();
    return res.send(addCustomerResponse);
});

/**
 * Welcome Route for the App
 */
router.get("/", async (_req, res) =>{

});

export default router;