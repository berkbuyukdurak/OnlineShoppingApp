/**
 * This is the controller of addCustomer request.
 */
 import {Request, Response, NextFunction} from 'express';
 import axios, {AxiosResponse} from 'axios';
 
 interface GreetingsResponse{
     message: String;
 }
 
 export default class AddCustomerResponseController{
     public async getMessage(): Promise<GreetingsResponse>{
         return{
             message: "Customer is added!",
         }
     }
 }