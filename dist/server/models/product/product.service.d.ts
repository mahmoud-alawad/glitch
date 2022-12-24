import { PrismaService } from 'server/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { FindProductsDto } from './dto/find-products.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { File } from './types/file';
export declare class ProductService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createProductDto: CreateProductDto): Promise<Product>;
    uploadPicture(id: string, file: File): Promise<Product>;
    findAll({ productName, page, offset, }: FindProductsDto): Promise<Product[]>;
    findOneById(id: string): Promise<Product>;
    findOneByUrlName(urlName: string): Promise<Product>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<Product>;
    remove(id: string): Promise<void>;
    private formatUrlName;
    private updateProductAndUrlName;
    private connectCategoriesById;
}
