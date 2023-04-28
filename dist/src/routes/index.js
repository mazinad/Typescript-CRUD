"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./user.routes"));
const category_routes_1 = __importDefault(require("./category.routes"));
const product_routes_1 = __importDefault(require("./product.routes"));
const IndexRoute = express_1.default.Router();
IndexRoute.use(express_1.default.json());
IndexRoute.use(express_1.default.urlencoded({ extended: false }));
IndexRoute.use(user_routes_1.default);
IndexRoute.use(category_routes_1.default);
IndexRoute.use(product_routes_1.default);
exports.default = IndexRoute;
