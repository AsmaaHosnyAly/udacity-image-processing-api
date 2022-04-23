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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readThumbnailFullPaths = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var utilities_1 = require("../utilities");
var resizeImage = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, filename, height, width, h, w, f, imageFormats, imagePath_1, resizePath, imagePathExists, response, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.query, filename = _a.filename, height = _a.height, width = _a.width;
                h = height ? parseInt(height, 10) : null;
                w = width ? parseInt(width, 10) : null;
                f = filename;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, , 7]);
                imageFormats = ["jpg", "jpeg", "png"];
                imagePath_1 = "".concat(f, "_").concat(w, "x_").concat(h, ".jpg");
                resizePath = "./resizedImages/".concat(f, "_").concat(w, "x_").concat(h, ".jpg");
                return [4 /*yield*/, (0, utilities_1.fileExisits)(path_1.default.join("resizedImages", imagePath_1))];
            case 2:
                imagePathExists = _b.sent();
                if (!imagePathExists) return [3 /*break*/, 3];
                res.sendFile("/".concat(imagePath_1), { root: path_1.default.join("./resizedImages") });
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, (0, utilities_1.sharpResize)(f, h, w)];
            case 4:
                response = _b.sent();
                response.toFile(resizePath, function (error) {
                    if (error) {
                        res.status(403).send({
                            ok: "failed",
                            message: error.message,
                        });
                    }
                    else {
                        res.sendFile("/".concat(imagePath_1), { root: path_1.default.join("./resizedImages") });
                    }
                });
                _b.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_1 = _b.sent();
                console.log(error_1);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
var readThumbnailFullPaths = function (req, res) {
    var folder = "resizedImages";
    var data = fs_1.default.readdirSync(folder);
    var thumbnails = data.map(function (ele) {
        return "http://localhost:3005/".concat(ele);
    });
    res.status(200).send({
        thumbnails: thumbnails,
    });
};
exports.readThumbnailFullPaths = readThumbnailFullPaths;
exports.default = resizeImage;
