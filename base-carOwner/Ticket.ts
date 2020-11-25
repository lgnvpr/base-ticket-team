import { BaseModel } from "../query/BaseModel";
import { Staff } from "./Staff";
import { Trip } from "./Trip";
import { ChairCar } from "./ChairCar";
export interface Ticket extends BaseModel {
  chairCarId?: string;
  customerId?: string;
  staffId?: string;
  tripId?: string;
  statusTicket?: statusTicket;
  localPickup?: string;
  localDrop?: string;
  metaMapping: {
    trip?: Trip;
    chairCar?: ChairCar;
    staff?: string;
    customer?: Staff;
  };
}

export enum statusTicket {
  payed = "payed",
  unpaid = "unpaid",
}