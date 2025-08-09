"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentRouter = void 0;
const express_1 = __importDefault(require("express"));
const contentController_1 = require("../controller/contentController");
const contentController_2 = require("../controller/contentController");
const contentController_3 = require("../controller/contentController");
const middleware_1 = require("../middleware");
exports.contentRouter = express_1.default.Router();
exports.contentRouter.post('/createContent', middleware_1.middleware, contentController_2.createContent);
exports.contentRouter.get('/allContent', middleware_1.middleware, contentController_1.allContent);
exports.contentRouter.delete('/deleteContent', middleware_1.middleware, contentController_3.deleteContent);
exports.contentRouter.get('/youtubeContent', middleware_1.middleware, contentController_1.youtubeContent);
exports.contentRouter.get('/twitterContent', middleware_1.middleware, contentController_1.twitterContent);
