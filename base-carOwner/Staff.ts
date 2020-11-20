import { BaseModel } from "../query/BaseModel";
import { Account } from "./Account";
import { PostionStaff } from "./PostionStaff";
export interface Staff extends BaseModel {
  name: string;
  identityCard?: string;
  birthAt?: Date;
  address?: string;
  positionId : string;
  avt?: string;
  phoneNumer: string;
  sex?: string;
  metaMapping ?: {
    account?: Account;
    position?: PostionStaff;
  }
}
