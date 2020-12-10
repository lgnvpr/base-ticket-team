import { data, __, isany, opt, isoDateOnly, isuuid, defaultValue, isstring, e164PhoneNumber } from "@deckchair-technicians/vice";
import { isBlank } from "../../vince/VinceString";
import { BaseModel } from "../query/BaseModel";
import { Account } from "./Account";
import { PositionStaff } from "./PositionStaff";
@data
export class Staff extends BaseModel {
	name?: string = __(isBlank());
	identityCard?: string = __(isBlank());
	birthAt?: Date = __(isoDateOnly());
	address?: string = __(isBlank());
	positionId?: string = __(isuuid());
	avt?: string ;
	phoneNumber: string = __(isBlank().and(e164PhoneNumber("vn")));
	sex?: string = __(defaultValue(()=> "Nam", isstring()));
	metaMapping?: {
		account?: Account;
		position?: PositionStaff;
	} = __(opt(isany()));
}
