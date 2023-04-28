import { IProduct } from "../interface/product.types";
import { productModel } from "../model/product.model";

export const getProducts = async () => {
    return await productModel.find({});
}
export const getProduct = async (id:string) => {
    return await productModel.findById(id);
}
export const createProduct = async (data:IProduct) => {
    return await productModel.create(data);
}