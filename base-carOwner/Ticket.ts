import { BaseModel } from "../query/BaseModel";
import { Staff } from "./Staff";
import { Trip } from "./Trip";
import { ChairCar } from "./ChairCar";
import { Customer } from "./Customer";
export interface Ticket extends BaseModel {
  chairCarId?: string;
  customerId?: string;
  staffId?: string;
  tripId?: string;
  statusTicket?: StatusTicket;
  localPickup?: string;
  localDrop?: string;
  description?: string;
  chair_car?: ChairCar;
  trip?: Trip;
  staff?: Staff;
  customer?: Customer;
}

export enum StatusTicket {
  order = "order",
  payed = "payed",
  unpaid = "unpaid",
  welcomed = "welcomed",
  cancel = "cancel"
}
