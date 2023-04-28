"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const helpers_1 = require("../utils/helpers");
const verifyToken = (req, res, next) => {
    const token = req.header('auth-token');
    if (token) {
        jsonwebtoken_1.default.verify(token, helpers_1.JWT_SECRET, (err, response) => {
            if (err) {
                res.status(400).json({ error: err.message });
            }
            return next();
        });
    }
    else {
        res.status(401).json({ error: 'Access Denied' });
    }
};
exports.default = verifyToken;
