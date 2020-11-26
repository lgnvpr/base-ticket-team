import { BaseModel } from "../query/BaseModel";
import { Car } from "./Car";
import { Staff } from "./Staff";
export interface Route extends BaseModel {
  localStart?: string;
  localEnd?: string;
  startAt?: Date;
  sumTimeRun?: number;
}
