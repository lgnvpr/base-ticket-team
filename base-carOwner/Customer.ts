import { BaseModel } from "../query/BaseModel";
import { Sex } from "./Sex";

export class  Customer extends BaseModel {
  name?: string;
  CMND?: string;
  phoneNumber?: string;
  email?: string;
  birthAt?: Date;
  sex?: Sex;
  avt?: string;
  imgThumbnailUrl?: string;
  description?: string;
}


