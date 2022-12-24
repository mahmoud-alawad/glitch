import { Country, Prisma, Role } from '@prisma/client';
export declare class CreateUser implements Prisma.UserCreateInput {
    userName: string;
    email: string;
    password: string;
    phoneNumber: string;
    country: Country;
    address: string;
    addressNote: string;
    city: string;
    postalCode: string;
    gender: string;
    dateOfBirth: string;
    orderId?: string;
    role: Role;
}
