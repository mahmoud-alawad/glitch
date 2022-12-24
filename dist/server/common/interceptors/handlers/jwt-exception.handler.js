"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtExceptionHandler = void 0;
const common_1 = require("@nestjs/common");
class JwtExceptionHandler {
    constructor() {
        this.jwtErrorNames = [
            'TokenExpiredError',
            'JsonWebTokenError',
            'NotBeforeError',
        ];
    }
    handle(error) {
        if (this.isJwtException(error)) {
            throw new common_1.UnauthorizedException('Invalid authorization token');
        }
    }
    isJwtException(error) {
        return this.jwtErrorNames.includes(error.name);
    }
}
exports.JwtExceptionHandler = JwtExceptionHandler;
//# sourceMappingURL=jwt-exception.handler.js.map