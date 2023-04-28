import { IUser } from "../interface/user.types";
import { userModel } from "../model/user.model";

export const getUsers = async () => {
    return await userModel.find({}, {password:0});
}
export const getUser = async (email:string) => {
    return await userModel.findOne({email:email});
}
export const createUser = async (user:IUser) => {
    return await userModel.create(user);
}