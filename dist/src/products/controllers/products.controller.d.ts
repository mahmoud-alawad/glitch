import { Product } from '@prisma/client';
import { createProduct } from '../entities/create-product';
import { updateProduct } from '../entities/update-product';
import { ProductsService } from '../service/products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    createProduct(newProduct: createProduct): Promise<Product>;
    getAllProducts(): Promise<Product[]>;
    updateProduct(id: string, productData: updateProduct): Promise<Product>;
    delete(id: string): Promise<Product>;
}
