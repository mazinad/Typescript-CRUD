"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const category_controller_1 = require("../controller/category.controller");
const verifyToken_middleware_1 = __importDefault(require("../middleware/verifyToken.middleware"));
const categoryRoute = express_1.default.Router();
categoryRoute.get('/categories', verifyToken_middleware_1.default, category_controller_1.getAllCategories);
categoryRoute.post('/category', verifyToken_middleware_1.default, category_controller_1.createCategory);
exports.default = categoryRoute;
