export interface BaseModel {
	id?: string;
	_id?: string;
	createBy?: string | null;
	createdAt?: Date | null;
	updateBy?: string | null;
	updatedAt?: Date | null;
	status?: Status;
	adminId?: string | null;
}

export enum Status {
	active = "active",
	deleted = "deleted",
}
