import { IQuery } from "./Query";

export interface IList extends IQuery{
    fields ?: string[],
    sort ?: string[] | string, 
    pageSize ?: number, // 
    page ?: number,
    populate ?:any // TODO : change it
    
}