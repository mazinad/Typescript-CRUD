import {model,Schema} from 'mongoose';
import {IUser,Roles} from '../interface/user.types';

const UserSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String,enum:Roles}
},{
    timestamps: true
});
export const userModel = model<IUser>('users',UserSchema);