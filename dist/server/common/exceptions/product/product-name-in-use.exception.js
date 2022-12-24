"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductNameInUseException = void 0;
const common_1 = require("@nestjs/common");
class ProductNameInUseException extends common_1.BadRequestException {
    constructor() {
        super('Product name already in use');
    }
}
exports.ProductNameInUseException = ProductNameInUseException;
//# sourceMappingURL=product-name-in-use.exception.js.map