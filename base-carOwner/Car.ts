import { BaseModel } from "../query/BaseModel";
export interface Car extends BaseModel {
  name: string;
  licensePlates: string;
  entryAt: Date;
  origin?: string;
  statusCar?: string;
  description?: string;
  metaMapping ?: { 
    totalChair ?: number;
  }
}

export enum statusCar {
  using = "using",
  fixing = "fixing",
}
