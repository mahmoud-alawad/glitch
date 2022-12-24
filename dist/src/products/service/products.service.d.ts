import { Product } from '@prisma/client';
import { PrismaService } from '../../database/prisma.service';
import { createProduct } from '../entities/create-product';
import { updateProduct } from '../entities/update-product';
export declare class ProductsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createProduct(createProduct: createProduct): Promise<Product>;
    getAllProducts(): Promise<Product[]>;
    updateProduct(id: string, newData: updateProduct): Promise<Product>;
    deleteProduct(id: string): Promise<Product>;
    getProducyByName(name: string): Promise<Product>;
}
