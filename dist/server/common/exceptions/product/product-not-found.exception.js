"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductNotFoundException = void 0;
const common_1 = require("@nestjs/common");
class ProductNotFoundException extends common_1.NotFoundException {
    constructor() {
        super('Product not found');
    }
}
exports.ProductNotFoundException = ProductNotFoundException;
//# sourceMappingURL=product-not-found.exception.js.map