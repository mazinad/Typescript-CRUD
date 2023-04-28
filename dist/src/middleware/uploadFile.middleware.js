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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = void 0;
const cloudinary_1 = require("cloudinary");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
function uploadImage(req) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const imageFile = (_a = req.files) === null || _a === void 0 ? void 0 : _a.image;
        if (!imageFile) {
            throw new Error('No image file');
        }
        return new Promise((resolve, reject) => {
            cloudinary_1.v2.uploader.upload(imageFile.path, (error, result) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result.secure_url);
                }
            });
        });
    });
}
exports.uploadImage = uploadImage;
