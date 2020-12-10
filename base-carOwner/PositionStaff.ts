import { data, __, opt, isstring, isany } from "@deckchair-technicians/vice";
import { isBlank } from "../../vince/VinceString";
import { BaseModel } from "../query/BaseModel";
import { PositionDefault } from "./PositionDefault";
@data
export class PositionStaff extends BaseModel {
	name?: string = __(isBlank());
	description?: string = __(opt(isstring()));
	keyDefault?: PositionDefault = __(opt(isany()));
	metaMapping?: {} = __(opt(isany()));
}

