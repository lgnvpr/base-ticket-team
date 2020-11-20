export interface IQuery<T> {
  page?: number;
  pageSize?: number;
  orderByField?: string[];
  query?: T | any;
  searchs?: ISearch[];
}

export interface ISearch {
  content: string;
  fields: string[];
}
