"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateParams(request, response, next) {
    var query = request.query;
    var requiredParams = ["filename", "height", "width"];
    for (var _i = 0, requiredParams_1 = requiredParams; _i < requiredParams_1.length; _i++) {
        var param = requiredParams_1[_i];
        if (query[param] === undefined) {
            response.status(400).send("Error:Please enter all parameters");
            return;
        }
        var value = query[param];
        if (param == "filename" && typeof value !== "string") {
            response.status(400).send("Error!!! Filename should be a string");
            return;
        }
        if (param == "height" || param == "width") {
            var num = Number(value);
            if (!num) {
                response.status(400).send("Height and width must be numbers");
                return;
            }
        }
    }
    next();
}
exports.default = validateParams;
