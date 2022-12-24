import { FindProductsDto } from '../product/dto/find-products.dto';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { FindCategoriesDto } from './dto/find-categories.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(createCategoryDto: CreateCategoryDto): Promise<Category>;
    findAll(findCategoriesDto: FindCategoriesDto): Promise<Category[]>;
    findOneById(id: string, findProductsDto: FindProductsDto): Promise<Category>;
    findOneByName(name: string, findProductsDto: FindProductsDto): Promise<Category>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<Category>;
    remove(id: string): Promise<void>;
}
