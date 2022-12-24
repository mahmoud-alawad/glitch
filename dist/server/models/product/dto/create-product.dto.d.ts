import { Decimal } from '@prisma/client/runtime';
import { Product } from '../entities/product.entity';
declare const CreateProductDto_base: import("@nestjs/common").Type<Omit<Product, "id" | "createdAt" | "urlName" | "picture">>;
export declare class CreateProductDto extends CreateProductDto_base {
    name: string;
    basePrice: string | number | Decimal;
    discountPercentage?: number;
    stock?: number;
    description?: string;
    categories?: string[];
}
export {};
