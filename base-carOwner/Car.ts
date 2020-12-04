import * as Joi from 'joi';
import { BaseModel } from "../query/BaseModel";
import { } from "joi"

export class Car extends BaseModel {
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

export const carValidate = Joi.object<Car>({
  _id : Joi.string().uuid(),
  name: Joi.string().max(20).required(),
  origin : Joi.string().min(3).max(10).required(),
  licensePlates : Joi.string().required(),
  description : Joi.string().required(),
  entryAt : Joi.date().required(),
})
