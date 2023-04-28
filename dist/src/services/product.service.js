"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = exports.getProduct = exports.getProducts = void 0;
const product_model_1 = require("../model/product.model");
const getProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_model_1.productModel.find({});
});
exports.getProducts = getProducts;
const getProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_model_1.productModel.findById(id);
});
exports.getProduct = getProduct;
const createProduct = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_model_1.productModel.create(data);
});
exports.createProduct = createProduct;
