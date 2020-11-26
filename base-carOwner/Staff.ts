import { BaseModel } from "../query/BaseModel";
import { Account } from "./Account";
import { PositionStaff } from "./PositionStaff";
export interface Staff extends BaseModel {
  name: string;
  identityCard?: string;
  birthAt?: Date;
  address?: string;
  positionId: string;
  avt?: string;
  phoneNumber: string;
  sex?: string;
  metaMapping?: {
    account?: Account;
    position?: PositionStaff;
  };
}
