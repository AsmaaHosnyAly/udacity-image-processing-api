"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandler(req, res) {
    var responseHTML = "<p>There was an error processing your image</p>";
    res.send(responseHTML);
}
exports.default = errorHandler;
