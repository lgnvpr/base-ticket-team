import { Customer } from "./Customer";
// import { Trip } from "./Trip";

export interface Luggage {
  customerId: string;
  tripId: string;
  metaMapping?: {
    customer: Customer;
    // trip: Trip;
  };
}
