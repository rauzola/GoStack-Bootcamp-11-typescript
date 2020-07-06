"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var porta = 3333;
var app = express_1.default();
app.get("/", function (request, response) {
    return response.json({ message: "Hello World" });
});
app.listen("" + porta, function () {
    console.log("Servidor iniciado na porta = " + porta);
});
