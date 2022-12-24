"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const jwt_exception_handler_1 = require("./handlers/jwt-exception.handler");
const prisma_exception_handler_1 = require("./handlers/prisma-exception.handler");
const user_input_exception_handler_1 = require("./handlers/user-input-exception.handler");
let ExceptionInterceptor = class ExceptionInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, rxjs_1.catchError)((error) => {
            new user_input_exception_handler_1.UserInputExceptionHandler().handle(error);
            new prisma_exception_handler_1.PrismaExceptionHandler().handle(error);
            new jwt_exception_handler_1.JwtExceptionHandler().handle(error);
            throw error;
        }));
    }
};
ExceptionInterceptor = __decorate([
    (0, common_1.Injectable)()
], ExceptionInterceptor);
exports.ExceptionInterceptor = ExceptionInterceptor;
//# sourceMappingURL=exception.interceptor.js.map