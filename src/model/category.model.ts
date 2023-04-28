import {model,Schema} from 'mongoose';
import { ICategory } from '../interface/category.types';

const categorySchema = new Schema({
    name: {type: String, required: true},
},{
    timestamps: true
});

export const categoryModel = model<ICategory>('category',categorySchema);