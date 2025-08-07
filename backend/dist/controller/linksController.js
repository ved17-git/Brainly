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
exports.shareLink = exports.share = void 0;
const client_1 = require("@prisma/client");
const generateURL_1 = require("../utils/generateURL");
const db = new client_1.PrismaClient();
const share = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { share } = req.body;
    try {
        const existingLink = yield db.links.findFirst({
            where: {
                //@ts-ignore
                userId: req.userId,
            }
        });
        if (existingLink) {
            res.status(200).json({
                msg: "url",
                url: existingLink.url
            });
            return;
        }
        const url = (0, generateURL_1.randomURL)();
        const newUrl = yield db.links.create({
            data: {
                url: url,
                //@ts-ignore
                userId: req.userId
            }
        });
        if (newUrl) {
            res.status(200).json({
                msg: "url",
                url: url
            });
            return;
        }
    }
    catch (e) {
        console.log(e);
        res.status(400).json({
            msg: "api error"
        });
    }
});
exports.share = share;
const shareLink = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shareLink = req.params.shareLink;
        const linkData = yield db.links.findFirst({
            where: {
                //@ts-ignore
                url: shareLink
            }
        });
        if (!linkData) {
            res.status(400).json({
                msg: "url not found"
            });
            return;
        }
        const data = yield db.user.findFirst({
            where: {
                id: linkData === null || linkData === void 0 ? void 0 : linkData.userId
            },
            include: {
                content: true
            }
        });
        if (!data) {
            res.status(400).json({
                msg: "shared link data not found"
            });
            return;
        }
        res.status(200).json({
            msg: "data",
            data: {
                id: data.id,
                username: data.username,
                content: data.content
            }
        });
        return;
    }
    catch (e) {
        console.log(e);
        res.status(400).json({
            msg: "api error"
        });
    }
});
exports.shareLink = shareLink;
