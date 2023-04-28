import { Request } from "express";
import { Document,Types } from "mongoose";
export  interface RequestWithUrl extends Request{
    imageUrl?:any
}
export interface IProduct{
    name: string,
    price: number,
    image: string,
    description: string,
    category: Types.ObjectId
    createdAt?: string,
    updatedAt?: string
}

export interface IProductDocument extends IProduct, Document{
    _id: Types.ObjectId
}