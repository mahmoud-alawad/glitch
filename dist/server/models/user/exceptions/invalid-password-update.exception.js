"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidPasswordUpdateException = void 0;
const user_service_input_exception_1 = require("./user-service-input.exception");
class InvalidPasswordUpdateException extends user_service_input_exception_1.UserServiceInputException {
    constructor() {
        super('Invalid current password');
    }
    invalidPassword() {
        return "Please enter both new password and current password";
    }
    generalMessage() {
        return "operation went wrong";
    }
    empltyCredentials(email) {
        return `invalid credentials using : ${email}`;
    }
}
exports.InvalidPasswordUpdateException = InvalidPasswordUpdateException;
//# sourceMappingURL=invalid-password-update.exception.js.map