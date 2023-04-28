"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../controller/product.controller");
const verifyToken_middleware_1 = __importDefault(require("../middleware/verifyToken.middleware"));
const productRoute = express_1.default.Router();
productRoute.get('/products', verifyToken_middleware_1.default, product_controller_1.getAllProducts);
productRoute.post('/product', verifyToken_middleware_1.default, product_controller_1.createProducts);
exports.default = productRoute;
