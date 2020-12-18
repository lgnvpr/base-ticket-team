

export class BaseModel {
	public id ?: string;
	public _id?: string 
	public createBy?: string|null 
	public createdAt?: Date|null 
	public updateBy?: string|null
	public updatedAt?: Date|null
	public status?: Status 
	public adminId?: string|null 
}

export enum Status {
	active = "active",
	deleted = "deleted",
}
