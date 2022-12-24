import { CreateProductDto } from './dto/create-product.dto';
import { FindProductsDto } from './dto/find-products.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';
import { File } from './types/file';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: CreateProductDto): Promise<Product>;
    findAll(findAllProductsDto: FindProductsDto): Promise<Product[]>;
    findOneById(id: string): Promise<Product>;
    findOneByUrlName(urlName: string): Promise<Product>;
    uploadPhoto(id: string, file: File): Promise<Product>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<Product>;
    remove(id: string): Promise<void>;
}
