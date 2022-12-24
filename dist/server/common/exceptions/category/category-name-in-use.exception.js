"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryNameInUseException = void 0;
const common_1 = require("@nestjs/common");
class CategoryNameInUseException extends common_1.BadRequestException {
    constructor() {
        super('Category name already in use');
    }
}
exports.CategoryNameInUseException = CategoryNameInUseException;
//# sourceMappingURL=category-name-in-use.exception.js.map