"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseNotFoundException = void 0;
const common_1 = require("@nestjs/common");
class PurchaseNotFoundException extends common_1.NotFoundException {
    constructor() {
        super('Purchase not found');
    }
}
exports.PurchaseNotFoundException = PurchaseNotFoundException;
//# sourceMappingURL=purchase-not-found.exception.js.map