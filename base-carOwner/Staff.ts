import { data, __, isany, opt, isoDateOnly, isuuid, defaultValue, isstring, e164PhoneNumber } from "@deckchair-technicians/vice";
import { BaseModel } from "../query/BaseModel";
import { Account } from "./Account";
import { PositionStaff } from "./PositionStaff";

export class Staff extends BaseModel {
	name?: string ;
	identityCard?: string ;
	birthAt?: Date;
	address?: string;
	positionId?: string ;
	avt?: string ;
	phoneNumber?: string;
	sex?: string;
	account?: Account;
	position?: PositionStaff;
}
