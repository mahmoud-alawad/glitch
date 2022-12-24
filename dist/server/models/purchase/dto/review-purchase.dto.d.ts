import { Purchase } from '../entities/purchase.entity';
declare const ReviewPurchaseDto_base: import("@nestjs/common").Type<Pick<Purchase, "reviewNote" | "reviewComment">>;
export declare class ReviewPurchaseDto extends ReviewPurchaseDto_base {
    reviewNote: number;
    reviewComment?: string;
}
export {};
