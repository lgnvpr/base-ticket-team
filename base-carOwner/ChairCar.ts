import { opt, __ } from "@deckchair-technicians/vice";
import { BaseModel } from "../query/BaseModel";
import { Car } from "./Car";

export interface ChairCar extends BaseModel {
  name?: string;
  carId?: string ;
  localFloor?: number;
  localRow?: number;
  localColumn?: number;
  description?: string;
  car?: Car;
}
