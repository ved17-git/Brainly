"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = require("./routes/userRoutes");
const contentRoutes_1 = require("./routes/contentRoutes");
const linkRoutes_1 = require("./routes/linkRoutes");
require('dotenv').config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/', userRoutes_1.userRouter);
app.use('/', contentRoutes_1.contentRouter);
app.use('/', linkRoutes_1.linkRouter);
app.listen(port, () => {
    console.log(`listening on ${port}`);
});
