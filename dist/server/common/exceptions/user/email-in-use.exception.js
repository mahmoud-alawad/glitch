"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailInUseException = void 0;
const common_1 = require("@nestjs/common");
class EmailInUseException extends common_1.BadRequestException {
    constructor() {
        super('E-mail already in use');
    }
}
exports.EmailInUseException = EmailInUseException;
//# sourceMappingURL=email-in-use.exception.js.map