import {v2 as cloudinary} from 'cloudinary';
import { Request } from 'express';
import dotenv from 'dotenv';
dotenv.config();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export async function uploadImage(req: Request) {
    const imageFile = (req as any).files?.image;
  if (!imageFile) {
    throw new Error('No image file');
  }

  return new Promise<string>((resolve, reject) => {
    cloudinary.uploader.upload(imageFile.path, (error: any, result: any) => {
      if (error) {
        reject(error);
      } else {
        resolve(result.secure_url);
      }
    });
  });
}
