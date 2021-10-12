/**
 * This is the controller of addCustomer request.
 */
import { Get, Route, Tags, Post, Body, Path } from "tsoa";
import {Customer} from "../models/customer";
import {
    getCustomers,
    createCustomer,
    ICustomerPayload
} from "../repositories/customer";

@Route("customers")
@Tags("Customer")
export default class CustomerController{
    
    @Get("/getCustomers")
    public async getCustomers(): Promise<Array<Customer>>{
        return getCustomers();
    }

    @Post("/addCustomer")
    public async createCustomer(@Body() body: ICustomerPayload): Promise<Customer> {
        return createCustomer(body);
    }
}