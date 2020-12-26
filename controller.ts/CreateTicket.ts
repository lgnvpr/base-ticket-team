import { Customer } from "../base-carOwner/Customer";
import { Ticket } from "../base-carOwner/Ticket";

export interface CreateTicket{
    ticket ?: Ticket[];
    customer ?: Customer
}