import { Prisma } from '@prisma/client';
export declare class UpdateUserDto implements Prisma.UserUpdateInput {
    username?: string;
    email?: string;
    password?: string;
    avatar?: string;
}
