"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const user_input_exception_handler_1 = require("../../common/interceptors/handlers/user-input-exception.handler");
const hash_config_1 = require("../../config/hash.config");
const prisma_service_1 = require("../../prisma/prisma.service");
const invalid_password_update_exception_1 = require("./exceptions/invalid-password-update.exception");
const missing_password_update_exception_1 = require("./exceptions/missing-password-update.exception");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUserDto) {
        const hashedPassword = await (0, bcrypt_1.hash)(createUserDto.password, hash_config_1.hashConfig.saltRounds);
        const lowerCaseEmail = createUserDto.email.toLowerCase();
        await this.prisma.user.create({
            data: Object.assign(Object.assign({}, createUserDto), { email: lowerCaseEmail, password: hashedPassword }),
        });
    }
    async findById(id) {
        const user = await this.prisma.user.findUnique({ where: { id } });
        delete user.password;
        return Object.assign({}, user);
    }
    async findByEmail(email) {
        const lowerCaseEmail = email.toLowerCase();
        return this.prisma.user.findUnique({ where: { email: lowerCaseEmail } });
    }
    async update(id, updateUserDto) {
        await this.hashIfUpdatingPassword(id, updateUserDto);
        const user = await this.prisma.user.update({
            where: { id },
            data: Object.assign(Object.assign({}, updateUserDto), { updatedAt: new Date() }),
        });
        delete user.password;
        return Object.assign({}, user);
    }
    async updateUserRole(updateUserRoleDto) {
        const user = await this.prisma.user.update({
            where: { email: updateUserRoleDto.email },
            data: { role: updateUserRoleDto.role },
        });
        delete user.password;
        return user;
    }
    async remove(id, deleteUserDto) {
        await this.validateCurrentPassword(id, deleteUserDto.currentPassword);
        await this.prisma.user.delete({ where: { id } });
    }
    async hashIfUpdatingPassword(id, updateUserDto) {
        if (updateUserDto.password && updateUserDto.currentPassword) {
            await this.validateCurrentPassword(id, updateUserDto.currentPassword);
            const hashedPassword = await (0, bcrypt_1.hash)(updateUserDto.password, hash_config_1.hashConfig.saltRounds);
            updateUserDto.password = hashedPassword;
            delete updateUserDto.currentPassword;
            return;
        }
        if (updateUserDto.password || updateUserDto.currentPassword) {
            throw new missing_password_update_exception_1.MissingPasswordUpdateException();
        }
    }
    async validateCurrentPassword(id, currentPassword) {
        const user = await this.prisma.user.findUnique({ where: { id } });
        const isCorrectPassword = await (0, bcrypt_1.compare)(currentPassword, user.password);
        if (!isCorrectPassword) {
            throw new user_input_exception_handler_1.UserInputExceptionHandler();
        }
    }
    async validateLogin(email, currentPassword) {
        const user = await this.prisma.user.findUnique({ where: { email } });
        if (!user)
            throw new invalid_password_update_exception_1.InvalidPasswordUpdateException().empltyCredentials(user.email);
        const verifyPassword = await (0, bcrypt_1.compare)(currentPassword, user.password);
        if (verifyPassword) {
            const { password } = user, result = __rest(user, ["password"]);
            return result;
        }
        return new invalid_password_update_exception_1.InvalidPasswordUpdateException().empltyCredentials(user.email);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map