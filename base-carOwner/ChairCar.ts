import { opt, __ } from "@deckchair-technicians/vice";
import { isBlank, isLengthString } from "../../vince/VinceString";
import { BaseModel } from "../query/BaseModel";
import { Car } from "./Car";

export class ChairCar extends BaseModel {
  name?: string = __(opt(isBlank().and(isLengthString(3, 20))));
  carId?: string = __(isBlank()); 
  localFloor?: number;
  localRow?: number;
  localColumn?: number;
  description?: string = __(opt(isBlank()));;
  metaMapping ?: {
    car?: Car;
  }
}
