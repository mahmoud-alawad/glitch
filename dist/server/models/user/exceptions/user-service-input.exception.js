"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServiceInputException = void 0;
class UserServiceInputException extends Error {
    constructor(message) {
        super(message);
    }
    invalidPassword() {
        return "Please enter both new password and current password";
    }
}
exports.UserServiceInputException = UserServiceInputException;
//# sourceMappingURL=user-service-input.exception.js.map