"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var cors_1 = __importDefault(require("cors"));
var middleware_1 = require("./middleware");
var app = (0, express_1.default)();
app.use(express_1.default.static("resizedImages"));
app.use(middleware_1.logger);
app.use((0, cors_1.default)());
app.use(express_1.default.json({ type: "application/json" }));
app.use(express_1.default.urlencoded({ extended: false }));
app.get("/", function (_req, res) {
    res.status(200).send("Welcome to Udacity Image Processing API");
});
// health check
app.get("/health", function (_req, res) {
    res.send({
        uptime: process.uptime(),
        message: "OK",
        timestamp: Date.now(),
    });
});
app.use(routes_1.default);
app.use(middleware_1.errorHandler);
exports.default = app;
