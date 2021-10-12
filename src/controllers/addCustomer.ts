/**
 * This is the controller of addCustomer request.
 */
import {Request, Response, NextFunction} from 'express';
import axios, {AxiosResponse} from 'axios';
import { Get, Route } from '@tsoa/runtime';

interface AddCustomerResponse{
    message: String;
}

export default class AddCustomerResponseController{
    public async getMessage(): Promise<AddCustomerResponse>{
        return{
            message: "Customer is added!",
        }
    }
}