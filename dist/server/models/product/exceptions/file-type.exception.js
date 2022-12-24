"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileTypeError = void 0;
const product_service_input_exception_1 = require("./product-service-input.exception");
class FileTypeError extends product_service_input_exception_1.ProductServiceInputException {
    constructor(fileTypes) {
        super(`File upload only supports the following filetypes - ${fileTypes}`);
    }
}
exports.FileTypeError = FileTypeError;
//# sourceMappingURL=file-type.exception.js.map