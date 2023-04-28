import { ICategory } from "../interface/category.types";
import { categoryModel } from "../model/category.model";

export const getCategories = async () => {
    return await categoryModel.find({});
}
export const createCategory = async (category:ICategory) => {
    return await categoryModel.create(category);
}