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
exports.logout = exports.signIn = exports.signUp = void 0;
const client_1 = require("@prisma/client");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db = new client_1.PrismaClient();
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    if (!username || !password || !email) {
        res.status(400).json({
            msg: "enter all details"
        });
        return;
    }
    try {
        const existingUser = yield db.user.findUnique({
            where: {
                email: email
            }
        });
        if (existingUser) {
            res.status(400).json({
                msg: "email already exists"
            });
            return;
        }
        const user = yield db.user.create({
            data: {
                username: username,
                email: email,
                password: password
            }
        });
        if (user) {
            res.status(200).json({
                msg: "user created successfully"
            });
            return;
        }
    }
    catch (e) {
        res.status(400).json({
            msg: "api error"
        });
    }
});
exports.signUp = signUp;
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!password || !email) {
        res.status(400).json({
            msg: "enter all details"
        });
        return;
    }
    try {
        const user = yield db.user.findUnique({
            where: {
                email: email
            }
        });
        if (!user) {
            res.status(400).json({
                msg: "user not found"
            });
            return;
        }
        const token = jsonwebtoken_1.default.sign({
            id: user.id,
            username: user.username,
        }, "secret");
        if (user.password === password) {
            res.status(200).json({
                msg: "logged In successfully",
                token
            });
            return;
        }
    }
    catch (e) {
        res.status(400).json({
            msg: "api error"
        });
    }
});
exports.signIn = signIn;
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({
            msg: "logged out successfully"
        });
        return;
    }
    catch (e) {
        res.status(400).json({
            msg: "api error"
        });
    }
});
exports.logout = logout;
