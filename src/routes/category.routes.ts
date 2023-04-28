import express from 'express';
import { getAllCategories,createCategory } from '../controller/category.controller';
import verifyToken from '../middleware/verifyToken.middleware';
const categoryRoute=express.Router();

categoryRoute.get('/categories',verifyToken,getAllCategories);
categoryRoute.post('/category',verifyToken,createCategory);

export default categoryRoute;