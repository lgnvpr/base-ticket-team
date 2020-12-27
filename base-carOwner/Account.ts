import { BaseModel } from "../query/BaseModel";
import { Staff } from "./Staff";

export interface Account extends BaseModel {
  username: string;
  password?: string;
  staffId: string;
  role?: string;
  staff?: Staff;
}
