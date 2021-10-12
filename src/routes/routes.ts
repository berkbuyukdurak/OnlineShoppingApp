import express from "express";
import { appendFile } from "fs";
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
 * Add Product Route
 */

/**
 * Update a Product Route
 */

/**
 * Make an Order Route
 */

/**
 * List Customer Order Route
 */

/**
 * Get Details of Customer Order Route
 */

/**
 * Welcome Route for the App
 */
router.get("/", async (_req, res) =>{
    
});



export default router;