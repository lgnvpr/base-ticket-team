import { IList } from "@Core/query/IList";

export interface IGetByDate extends IList{
    from : Date;
    to : Date;
}