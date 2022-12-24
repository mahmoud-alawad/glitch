"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInputExceptionHandler = void 0;
const common_1 = require("@nestjs/common");
const auth_service_input_exception_1 = require("../../../auth/exceptions/auth-service-input.exception");
const product_service_input_exception_1 = require("../../../models/product/exceptions/product-service-input.exception");
const purchase_service_input_exception_1 = require("../../../models/purchase/exceptions/purchase-service-input.exception");
const user_service_input_exception_1 = require("../../../models/user/exceptions/user-service-input.exception");
class UserInputExceptionHandler {
    handle(error) {
        if (error instanceof auth_service_input_exception_1.AuthServiceInputException) {
            throw new common_1.UnauthorizedException(error.message);
        }
        if (error instanceof user_service_input_exception_1.UserServiceInputException) {
            throw new common_1.BadRequestException(error.message);
        }
        if (error instanceof product_service_input_exception_1.ProductServiceInputException) {
            throw new common_1.BadRequestException(error.message);
        }
        if (error instanceof purchase_service_input_exception_1.PurchaseServiceInputException) {
            throw new common_1.NotFoundException(error.message);
        }
    }
}
exports.UserInputExceptionHandler = UserInputExceptionHandler;
//# sourceMappingURL=user-input-exception.handler.js.map