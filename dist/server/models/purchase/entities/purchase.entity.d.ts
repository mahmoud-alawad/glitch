import { Prisma } from '@prisma/client';
export declare class Purchase implements Prisma.PurchaseUncheckedCreateInput {
    id?: string;
    userId: string;
    productId: string;
    amount?: number;
    totalPrice: string | number | Prisma.Decimal;
    reviewNote?: number;
    reviewComment?: string;
    createdAt?: string | Date;
}
