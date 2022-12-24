import { PrismaService } from 'server/prisma/prisma.service';
import { FindProductsDto } from '../product/dto/find-products.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { FindCategoriesDto } from './dto/find-categories.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
export declare class CategoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createCategoryDto: CreateCategoryDto): Promise<Category>;
    findAll({ categoryName, page, offset, }: FindCategoriesDto): Promise<Category[]>;
    findOneById(id: string, { productName, page, offset }: FindProductsDto): Promise<Category>;
    findOneByName(name: string, { productName, page, offset }: FindProductsDto): Promise<Category>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<Category>;
    remove(id: string): Promise<void>;
    private capitalizeOnlyFirstLetter;
    private updateCategoryAndName;
}
