import { data, __, opt, isstring, isany } from "@deckchair-technicians/vice";
import { BaseModel } from "../query/BaseModel";
import { PositionDefault } from "./PositionDefault";
@data
export class PositionStaff extends BaseModel {
	name?: string 
	description?: string 
	keyDefault?: PositionDefault 
	metaMapping?: {} 
}

