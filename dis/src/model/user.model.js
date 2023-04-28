"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = require("mongoose");
const user_types_1 = require("../interface/user.types");
const UserSchema = new mongoose_1.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: user_types_1.Roles }
}, {
    timestamps: true
});
exports.userModel = (0, mongoose_1.model)('users', UserSchema);
