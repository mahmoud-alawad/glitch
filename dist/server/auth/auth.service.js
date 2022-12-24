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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt_1 = require("bcrypt");
const jwt_config_1 = require("../config/jwt.config");
const user_service_1 = require("../models/user/user.service");
const prisma_service_1 = require("../prisma/prisma.service");
const getTokenExpirationDate_1 = require("../util/getTokenExpirationDate");
const uuid_1 = require("uuid");
const invalid_email_or_password_exception_1 = require("./exceptions/invalid-email-or-password.exception.");
const invalid_refresh_token_exception_1 = require("./exceptions/invalid-refresh-token.exception");
let AuthService = class AuthService {
    constructor(userService, jwtService, prismaService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.prismaService = prismaService;
    }
    async login(email, password, browserInfo) {
        const user = await this.validateUser(email, password);
        const payload = { sub: user.id, userRole: user.role };
        const accessToken = await this.generateAccessToken(payload);
        const refreshToken = await this.createRefreshToken({ sub: payload.sub }, browserInfo);
        return {
            accessToken,
            refreshToken,
        };
    }
    async refreshToken(refreshToken, browserInfo) {
        const refreshTokenContent = await this.jwtService.verifyAsync(refreshToken, jwt_config_1.refreshJwtConfig);
        await this.validateRefreshToken(refreshToken, refreshTokenContent);
        const userRole = await this.getUserRole(refreshTokenContent.sub);
        const accessToken = await this.generateAccessToken({
            sub: refreshTokenContent.sub,
            userRole,
        });
        const newRefreshToken = await this.rotateRefreshToken(refreshToken, refreshTokenContent, browserInfo);
        return {
            accessToken,
            refreshToken: newRefreshToken,
        };
    }
    async logout(refreshToken) {
        await this.prismaService.userTokens.deleteMany({ where: { refreshToken } });
    }
    async logoutAll(userId) {
        await this.prismaService.userTokens.deleteMany({ where: { userId } });
    }
    async findAllTokens(userId) {
        const tokens = await this.prismaService.userTokens.findMany({
            where: { userId },
        });
        return tokens;
    }
    async validateUser(email, password) {
        const user = await this.userService.findByEmail(email);
        if (user) {
            const isPasswordValid = await (0, bcrypt_1.compare)(password, user.password);
            if (isPasswordValid) {
                return Object.assign(Object.assign({}, user), { password: undefined });
            }
        }
        throw new invalid_email_or_password_exception_1.InvalidEmailOrPasswordException();
    }
    async generateAccessToken(payload) {
        const accessToken = await this.jwtService.signAsync(payload, jwt_config_1.accessJwtConfig);
        return accessToken;
    }
    async createRefreshToken(payload, browserInfo) {
        if (!payload.tokenFamily) {
            payload.tokenFamily = (0, uuid_1.v4)();
        }
        const refreshToken = await this.jwtService.signAsync(Object.assign({}, payload), jwt_config_1.refreshJwtConfig);
        await this.saveRefreshToken({
            userId: payload.sub,
            refreshToken,
            family: payload.tokenFamily,
            browserInfo,
        });
        return refreshToken;
    }
    async saveRefreshToken(refreshTokenCredentials) {
        const expiresAt = (0, getTokenExpirationDate_1.getTokenExpirationDate)();
        await this.prismaService.userTokens.create({
            data: Object.assign(Object.assign({}, refreshTokenCredentials), { expiresAt }),
        });
    }
    async validateRefreshToken(refreshToken, refreshTokenContent) {
        const userTokens = await this.prismaService.userTokens.findMany({
            where: { userId: refreshTokenContent.sub, refreshToken },
        });
        const isRefreshTokenValid = userTokens.length > 0;
        if (!isRefreshTokenValid) {
            await this.removeRefreshTokenFamilyIfCompromised(refreshTokenContent.sub, refreshTokenContent.tokenFamily);
            throw new invalid_refresh_token_exception_1.InvalidRefreshTokenException();
        }
        return true;
    }
    async removeRefreshTokenFamilyIfCompromised(userId, tokenFamily) {
        const familyTokens = await this.prismaService.userTokens.findMany({
            where: { userId, family: tokenFamily },
        });
        if (familyTokens.length > 0) {
            await this.prismaService.userTokens.deleteMany({
                where: { userId, family: tokenFamily },
            });
        }
    }
    async rotateRefreshToken(refreshToken, refreshTokenContent, browserInfo) {
        await this.prismaService.userTokens.deleteMany({ where: { refreshToken } });
        const newRefreshToken = await this.createRefreshToken({
            sub: refreshTokenContent.sub,
            tokenFamily: refreshTokenContent.tokenFamily,
        }, browserInfo);
        return newRefreshToken;
    }
    async getUserRole(userId) {
        const user = await this.userService.findById(userId);
        return user.role;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService,
        prisma_service_1.PrismaService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map