"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controller/userController");
const userController_2 = require("../controller/userController");
const userController_3 = require("../controller/userController");
exports.userRouter = express_1.default.Router();
exports.userRouter.post('/signUp', userController_2.signUp);
exports.userRouter.post('/signIn', userController_1.signIn);
exports.userRouter.post('/logout', userController_3.logout);
