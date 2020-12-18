import * as Joi from 'joi';
import { BaseModel } from "../query/BaseModel";
import { } from "joi"
import { __,isoDateOnly, enumvalue, opt, isstring, isany } from '@deckchair-technicians/vice';

export class Car extends BaseModel {
  name?: string 
  licensePlates?: string 
  entryAt?: Date
  origin?: string
  statusCar?: string
  description?: string 
  totalChair ?: number;
}

export enum statusCar {
  using = "using",
  fixing = "fixing",
}
