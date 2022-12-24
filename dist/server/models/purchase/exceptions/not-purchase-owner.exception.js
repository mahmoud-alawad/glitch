"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotPurchaseOwnerException = void 0;
const purchase_service_input_exception_1 = require("./purchase-service-input.exception");
class NotPurchaseOwnerException extends purchase_service_input_exception_1.PurchaseServiceInputException {
    constructor() {
        super('Purchase not found');
    }
}
exports.NotPurchaseOwnerException = NotPurchaseOwnerException;
//# sourceMappingURL=not-purchase-owner.exception.js.map