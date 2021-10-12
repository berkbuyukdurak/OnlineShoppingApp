import express from "express";
import CustomerController from "../controllers/addCustomer";
import HttpException from "../exceptions/HttpException";

const router = express.Router();

router.get("/getCustomers", async (_req, res) => {
    const controller = new CustomerController();
    const response = await controller.getCustomers();
    if(response.length == 0)
    res.status(404).send({status: 404, message: "There is no user in the table!" });
    return res.send(response);
});

router.post("/addCustomer", async (req,res) =>{
    const controller = new CustomerController();
    const response = await controller.createCustomer(req.body);
    return res.send(response);
})


export default router;