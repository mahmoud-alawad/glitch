import { Purchase } from '../entities/purchase.entity';
declare const CreatePurchaseDto_base: import("@nestjs/common").Type<Pick<Purchase, "productId" | "amount">>;
export declare class CreatePurchaseDto extends CreatePurchaseDto_base {
    productId: string;
    amount: number;
}
export {};
