"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../controller/user.controller");
const express_1 = __importDefault(require("express"));
const verifyToken_middleware_1 = __importDefault(require("../middleware/verifyToken.middleware"));
const validation_middleware_1 = require("../middleware/validation.middleware");
const user_validationschema_1 = require("../validation_schemas/user.validationschema");
const userRoute = express_1.default.Router();
userRoute.post('/register', (0, validation_middleware_1.validate)(user_validationschema_1.userSchema), user_controller_1.createUser);
userRoute.get('/users', verifyToken_middleware_1.default, user_controller_1.getAllUsers);
userRoute.get('/user/:email', verifyToken_middleware_1.default, user_controller_1.getUser);
userRoute.post('/login', (0, validation_middleware_1.validate)(user_validationschema_1.userSchema), user_controller_1.authenticateUser);
exports.default = userRoute;
