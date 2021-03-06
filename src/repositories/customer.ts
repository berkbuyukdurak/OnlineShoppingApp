import { getRepository } from "typeorm";
import { Customer } from "../models";

export interface ICustomerPayload {
    firstName: string;
    lastName: string;
    email: string;
}

/**
 * It finds all of the customer records from database.
 * @returns customer records
 */
export const getCustomers = async (): Promise<Array<Customer>> => {
    const customerRepository = getRepository(Customer);
    return customerRepository.find();
};

/**
 * It creates new customer.
 * @param payload
 * @returns 
 */
export const createCustomer = async(payload: ICustomerPayload): Promise<Customer> => {
    const customerRepository = getRepository(Customer);
    const customer = new Customer();
    return customerRepository.save({
        ...customer,
        ...payload,
    });
};