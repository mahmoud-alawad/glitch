"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsAdmin = exports.IS_ADMIN_KEY = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const roles_guard_1 = require("../guards/roles.guard");
exports.IS_ADMIN_KEY = 'isAdmin';
function IsAdmin() {
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)(exports.IS_ADMIN_KEY, true), (0, common_1.UseGuards)(roles_guard_1.RolesGuard), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Unauthorized' }), (0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden resource' }));
}
exports.IsAdmin = IsAdmin;
//# sourceMappingURL=is-admin.decorator.js.map