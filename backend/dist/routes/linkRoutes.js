"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkRouter = void 0;
const express_1 = __importDefault(require("express"));
const linksController_1 = require("../controller/linksController");
const linksController_2 = require("../controller/linksController");
const middleware_1 = require("../middleware");
exports.linkRouter = express_1.default.Router();
exports.linkRouter.post('/share', middleware_1.middleware, linksController_1.share);
exports.linkRouter.get('/share/:shareLink', linksController_2.shareLink);
