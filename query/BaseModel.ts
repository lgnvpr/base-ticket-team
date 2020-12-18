

export class BaseModel {
	public id?: string 
	public createBy?: string|null 
	public createAt?: Date|null 
	public updateBy?: string|null
	public updateAt?: Date|null
	public status?: Status 
	public adminId?: string|null 
	public metaMapping?: any 
}

export enum Status {
	active = "active",
	deleted = "deleted",
}
