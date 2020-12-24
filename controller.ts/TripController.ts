import { Trip } from "../base-carOwner/Trip";
import { IList } from "../query/IList";

export interface IGetByDate extends IList{
    from : Date;
    to : Date;
}

export interface TripShowHome extends Trip{
    totalChair ?: number;
    totalChairRemain ?: number
}