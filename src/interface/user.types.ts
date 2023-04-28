import { Document } from "mongoose";
export enum Roles {
    admin=1,
    customer=2
}
export interface IUser{
    email: string,
    password: string,
    role: Roles | String,
    createdAt?:string,
    updatedAt?:string
}
export interface IUserDoc extends IUser, Document{
    _id: string,
}