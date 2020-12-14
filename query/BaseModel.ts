import {
	enumvalue,
	isany,
	isnull,
	isoDateOnly,
	isstring,
	isuuid,
	opt,
	isoUtcDateTime,
	__,
} from "@deckchair-technicians/vice";
import * as Joi from "joi";

export class BaseModel {
	public _id?: string = __(opt(isuuid()));
	public createBy?: string|null = __(opt(isuuid().or(isnull())));
	public createAt?: Date|null = __(opt(isoUtcDateTime().or(isnull())));
	public updateBy?: string|null = __(opt(isuuid().or(isnull())));
	public updateAt?: Date|null = __(opt(isoUtcDateTime().or(isnull())));
	public status?: Status = __(opt(enumvalue(Status)));
	public adminId?: string|null = __(opt(isany().or(isnull())));
	public metaMapping?: any = __(opt(isany()));
}

export enum Status {
	active = "active",
	deleted = "deleted",
}
