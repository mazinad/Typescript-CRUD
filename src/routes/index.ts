import express from 'express';
import userRoute from './user.routes';
import categoryRoute from './category.routes';
import productRoute from './product.routes';
const IndexRoute = express.Router();
IndexRoute.use(express.json());
IndexRoute.use(express.urlencoded({extended:false}));
IndexRoute.use(userRoute);
IndexRoute.use(categoryRoute);
IndexRoute.use(productRoute);

export default IndexRoute;