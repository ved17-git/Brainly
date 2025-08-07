"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomURL = void 0;
const randomURL = () => {
    let baseURL = "";
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ";
    for (let i = 1; i <= 10; i++) {
        let random = Math.floor(Math.random() * 48);
        let c = chars.charAt(random);
        baseURL += random + c;
    }
    return baseURL;
};
exports.randomURL = randomURL;
