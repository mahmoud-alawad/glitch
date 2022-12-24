import { Prisma, ProductStatus } from '@prisma/client';
export declare class createProduct implements Prisma.ProductCreateInput {
    name: string;
    description: string;
    stock: number;
    price: number;
    status: ProductStatus;
}
