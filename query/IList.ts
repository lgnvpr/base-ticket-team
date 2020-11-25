import { IQuery } from "./Query";

export interface IList extends IQuery{
    fields ?: string[],
    sort ?: string,
    pageSize ?: number, 
    page : number,
    
}