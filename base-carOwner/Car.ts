import * as Joi from 'joi';
import { BaseModel } from "../query/BaseModel";
import { } from "joi"
import { isBlank, isLengthString } from '../../vince/VinceString';
import { __,isoDateOnly, enumvalue, opt, isstring, isany } from '@deckchair-technicians/vice';

export class Car extends BaseModel {
  name?: string = __(isBlank().and(isLengthString(3, 30)));
  licensePlates?: string = __(isBlank().and(isLengthString(3, 15)));
  entryAt?: Date = __(isoDateOnly());
  origin?: string = __(isBlank().and(isLengthString(2, 20)));
  statusCar?: string=  __(enumvalue(statusCar));
  description?: string = __(opt(isstring()));
  metaMapping ?: { 
    totalChair ?: number;
  } = __(opt(isany()))
}

export enum statusCar {
  using = "using",
  fixing = "fixing",
}
