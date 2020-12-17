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
  statusTicket?: statusTicket;
  localPickup?: string;
  localDrop?: string;
  description?: string;
  metaMapping: {
    trip?: Trip;
    chairCar?: ChairCar;
    staff?: Staff;
    customer?: Customer;
  };
}

export enum statusTicket {
  payed = "payed",
  unpaid = "unpaid",
}
