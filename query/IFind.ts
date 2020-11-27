import { IQuery } from "./Query";

export interface IFind extends IQuery{
    fields ?: string[],
    sort ?: string[],
    limit : number, 
    offset : number,
}