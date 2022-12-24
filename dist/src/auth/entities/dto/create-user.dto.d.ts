import { Prisma } from '@prisma/client';
export declare class CreateUserDto implements Prisma.UserCreateInput {
    username: string;
    email: string;
    password: string;
    avatar?: string;
}
