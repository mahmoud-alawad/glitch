"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const auth_module_1 = require("./auth/auth.module");
const access_jwt_auth_guard_1 = require("./auth/access-jwt-auth.guard");
const user_module_1 = require("./models/user/user.module");
const prisma_module_1 = require("./prisma/prisma.module");
const product_module_1 = require("./models/product/product.module");
const category_module_1 = require("./models/category/category.module");
const purchase_module_1 = require("./models/purchase/purchase.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            prisma_module_1.PrismaModule,
            product_module_1.ProductModule,
            category_module_1.CategoryModule,
            purchase_module_1.PurchaseModule,
        ],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: access_jwt_auth_guard_1.AccessJwtAuthGuard,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map