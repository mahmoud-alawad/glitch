import { Prisma } from '@prisma/client';
export declare class UpdateUser implements Prisma.UserUpdateInput {
    userName?: string;
    email?: string;
    password?: string;
}
