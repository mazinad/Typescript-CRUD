import express from 'express';
import { getAllProducts,createProducts } from '../controller/product.controller';
import verifyToken from '../middleware/verifyToken.middleware';

const productRoute=express.Router();

productRoute.get('/products',verifyToken,getAllProducts);
productRoute.post('/product',verifyToken,createProducts);

export default productRoute;