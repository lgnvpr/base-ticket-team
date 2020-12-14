import { BaseModel } from "../query/BaseModel";

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

export enum Sex {
  male = "male",
  female = "female",
  gay = "gay",
  leg = "leg",
}
