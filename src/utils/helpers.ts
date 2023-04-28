import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import {v2 as cloudinary} from 'cloudinary';
require('dotenv').config();

export const JWT_SECRET = process.env.JWT_SECRET  || 'secret';
export const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}
export const comparePassword = async (password: string, hash: string) => {
    return await bcrypt.compare(password, hash);
}
export const generateToken = (payload: any) => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '15m' });
}
export const uploadToCloudinary = async (file: any) => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
    const image= await cloudinary.uploader.upload(file,(result:any)=>result)
    return image;
}