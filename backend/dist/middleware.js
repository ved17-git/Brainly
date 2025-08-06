"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const middleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.json({
            msg: "token not found"
        });
        return;
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jsonwebtoken_1.default.verify(token, "secret");
        if (typeof decoded === 'object' && decoded !== null && 'id' in decoded) {
            req.body = {
                id: decoded.id
            };
            next();
        }
    }
    catch (e) {
        res.json({
            msg: "middleware error"
        });
    }
};
exports.middleware = middleware;
