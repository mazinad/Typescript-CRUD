"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productModel = void 0;
const mongoose_1 = require("mongoose");
const category_model_1 = require("./category.model");
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: mongoose_1.Schema.Types.ObjectId, ref: category_model_1.categoryModel, required: true },
    image: { type: String, required: true }
}, {
    timestamps: true
});
exports.productModel = (0, mongoose_1.model)('product', productSchema);
