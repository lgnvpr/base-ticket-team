export interface ChartDay{
    day?: Date;
    data?: number;
}


export class Statistical{
    charTicket?: ChartDay[];
    charRevenue?: ChartDay[];
    totalCustomer?: number;
    totalRevenue?: number;
    totalTrip?: number;
    totalTicket ?: number;
}