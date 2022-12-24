"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUpload = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const file_upload_dto_1 = require("../../models/product/dto/file-upload.dto");
function FileUpload() {
    return (0, common_1.applyDecorators)((0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')), (0, swagger_1.ApiConsumes)('multipart/form-data'), (0, swagger_1.ApiBody)({ type: file_upload_dto_1.FileUploadDto }));
}
exports.FileUpload = FileUpload;
//# sourceMappingURL=file-upload.decorator.js.map