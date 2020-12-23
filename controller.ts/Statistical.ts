
export class IntervalTicketChart {
    day?: Date;
    data?: number;
}

export class Summary {
    totalCustomer?: number;
    totalRevenue?: number;
    totalTrip?: number;
    totalTicket?: number;
}

export class PropsSummary {
    from?: Date
    to?: Date
    interval?: "day" | "month"
}