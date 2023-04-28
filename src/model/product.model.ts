import {model,Schema} from 'mongoose';
import { IProduct } from '../interface/product.types';
import {categoryModel} from './category.model';

const productSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: Schema.Types.ObjectId, ref: categoryModel, required: true},
    image: {type: String, required: true}
},{
    timestamps: true
});

export const productModel = model<IProduct>('product',productSchema);