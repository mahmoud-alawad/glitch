import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { PrismaService } from '../../database/prisma.service';
import { CreateUser } from '../entities/create-user';
export declare class AuthService {
    private readonly prisma;
    private readonly jwt;
    constructor(prisma: PrismaService, jwt: JwtService);
    logoutUser(id: number): Promise<number>;
    registerUser(createUser: CreateUser): Promise<User>;
    validateUserCredentials(email: string, password: string): Promise<any>;
    loginWithCredentials(user: User): Promise<{
        access_token: string;
    }>;
}
