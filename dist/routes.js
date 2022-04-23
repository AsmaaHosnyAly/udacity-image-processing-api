"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var controller_1 = require("./controller");
var middleware_1 = require("./middleware");
var router = (0, express_1.default)();
//   router.get("/api/images");
router.get("/api/images/resize", middleware_1.validateParams, controller_1.resizeImage);
router.get("/api/thumbnails", controller_1.readThumbnailFullPaths);
exports.default = router;
