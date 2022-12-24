import { JwtService } from '@nestjs/jwt';
import { UserTokens } from '@prisma/client';
import { UserService } from 'server/models/user/user.service';
import { PrismaService } from 'server/prisma/prisma.service';
import { LoginResponse } from './dto/login.response';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    private readonly prismaService;
    constructor(userService: UserService, jwtService: JwtService, prismaService: PrismaService);
    login(email: string, password: string, browserInfo?: string): Promise<LoginResponse>;
    refreshToken(refreshToken: string, browserInfo?: string): Promise<LoginResponse>;
    logout(refreshToken: string): Promise<void>;
    logoutAll(userId: string): Promise<void>;
    findAllTokens(userId: string): Promise<UserTokens[]>;
    private validateUser;
    private generateAccessToken;
    private createRefreshToken;
    private saveRefreshToken;
    private validateRefreshToken;
    private removeRefreshTokenFamilyIfCompromised;
    private rotateRefreshToken;
    private getUserRole;
}
