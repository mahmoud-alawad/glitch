"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWithoutPassword = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("./user.entity");
class UserWithoutPassword extends (0, swagger_1.OmitType)(user_entity_1.User, [
    'password',
]) {
}
exports.UserWithoutPassword = UserWithoutPassword;
//# sourceMappingURL=user-without-password.entity.js.map