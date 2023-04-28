import {Request,Response} from 'express';
import {IProduct,RequestWithUrl} from '../interface/product.types';
import {uploadImage} from '../middleware/uploadFile.middleware';
import * as productService from '../services/product.service';


export async function getAllProducts(req:Request,res:Response){
    try{
        const products = await productService.getProducts();
        res.status(200).json(products);
    }catch(error:any){
        res.status(500).json({error:error.message});
    }
}

export async function createProducts(req: RequestWithUrl, res: Response) {
    try {
      const data: IProduct = req.body;
      const imageUrl: string = await uploadImage(req);
  
      data.image = imageUrl;
  
      const product = await productService.createProduct(data);
      res.status(201).json({ message: 'Product created', data: product });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
}
