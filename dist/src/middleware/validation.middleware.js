"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const validate = (schema) => (req, res, next) => {
    try {
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.message });
        }
        return next();
    }
    catch (error) {
        console.log(error);
    }
};
exports.validate = validate;
