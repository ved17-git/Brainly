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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContent = exports.updateContent = exports.allContent = exports.createContent = void 0;
const client_1 = require("@prisma/client");
const db = new client_1.PrismaClient();
const createContent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, link } = req.body;
    //@ts-ignore
    const id = req.userId;
    console.log(title, link, id);
    try {
        const content = yield db.content.create({
            data: {
                title: title,
                link: link,
                userId: id
            },
        });
        if (!content) {
            res.status(400).json({
                msg: "content creation error",
            });
            return;
        }
        res.status(200).json({
            msg: "content created",
            content
        });
        return;
    }
    catch (e) {
        console.log(e);
        res.status(400).json({
            msg: "api error"
        });
        return;
    }
});
exports.createContent = createContent;
const allContent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const content = yield db.content.findMany({
            where: {
                //@ts-ignore
                userId: req.userId
            }
        });
        if (!content) {
            res.status(400).json({
                msg: "No content found"
            });
            return;
        }
        res.status(200).json({
            msg: "All content",
            content
        });
        return;
    }
    catch (e) {
        res.status(400).json({
            msg: "api error"
        });
        return;
    }
});
exports.allContent = allContent;
const updateContent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, title, link } = req.body;
    try {
        const content = yield db.content.update({
            where: {
                id: id
            },
            data: {
                title,
                link
            }
        });
        if (!content) {
            res.status(400).json({
                msg: "No content found"
            });
            return;
        }
        res.status(200).json({
            msg: "Content updated",
            content
        });
        return;
    }
    catch (e) {
        res.status(400).json({
            msg: "api error"
        });
        return;
    }
});
exports.updateContent = updateContent;
const deleteContent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        const content = yield db.content.delete({
            where: {
                id: id
            }
        });
        if (!content) {
            res.status(400).json({
                msg: "No content found"
            });
            return;
        }
        res.status(200).json({
            msg: "deleted successfully",
        });
        return;
    }
    catch (e) {
        res.status(400).json({
            msg: "api error"
        });
        return;
    }
});
exports.deleteContent = deleteContent;
