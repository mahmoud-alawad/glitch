"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerUploadConfig = exports.maxImageUploadSize = exports.validImageUploadTypesRegex = void 0;
const multer_1 = require("multer");
const path_1 = __importDefault(require("path"));
const file_type_exception_1 = require("../models/product/exceptions/file-type.exception");
exports.validImageUploadTypesRegex = /jpeg|jpg|png/;
exports.maxImageUploadSize = 3 * 1024 * 1024;
exports.multerUploadConfig = {
    storage: (0, multer_1.diskStorage)({
        destination: './tmp',
        filename: (request, file, callback) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            const fileName = `${uniqueSuffix}-${file.originalname}`;
            return callback(null, fileName);
        },
    }),
    fileFilter: (request, file, callback) => {
        const mimetype = exports.validImageUploadTypesRegex.test(file.mimetype);
        const extname = exports.validImageUploadTypesRegex.test(path_1.default.extname(file.originalname).toLowerCase());
        if (mimetype && extname) {
            return callback(null, true);
        }
        return callback(new file_type_exception_1.FileTypeError(exports.validImageUploadTypesRegex), false);
    },
    limits: {
        fileSize: exports.maxImageUploadSize,
    },
};
//# sourceMappingURL=multer-upload.config.js.map