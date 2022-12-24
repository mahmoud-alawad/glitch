"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const public_decorator_1 = require("../../auth/public.decorator");
const is_admin_decorator_1 = require("../../common/decorators/is-admin.decorator");
const find_products_dto_1 = require("../product/dto/find-products.dto");
const category_service_1 = require("./category.service");
const create_category_dto_1 = require("./dto/create-category.dto");
const find_categories_dto_1 = require("./dto/find-categories.dto");
const update_category_dto_1 = require("./dto/update-category.dto");
let CategoryController = class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async create(createCategoryDto) {
        return this.categoryService.create(createCategoryDto);
    }
    async findAll(findCategoriesDto) {
        return this.categoryService.findAll(findCategoriesDto);
    }
    async findOneById(id, findProductsDto) {
        return this.categoryService.findOneById(id, findProductsDto);
    }
    async findOneByName(name, findProductsDto) {
        return this.categoryService.findOneByName(name, findProductsDto);
    }
    async update(id, updateCategoryDto) {
        return this.categoryService.update(id, updateCategoryDto);
    }
    async remove(id) {
        return this.categoryService.remove(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Admin creates a new category' }),
    (0, is_admin_decorator_1.IsAdmin)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_category_dto_1.CreateCategoryDto]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Returns all categories' }),
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_categories_dto_1.FindCategoriesDto]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Admin gets category by ID and its products' }),
    (0, is_admin_decorator_1.IsAdmin)(),
    (0, common_1.Get)('/id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, find_products_dto_1.FindProductsDto]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "findOneById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Returns category by name and its products' }),
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':name'),
    __param(0, (0, common_1.Param)('name')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, find_products_dto_1.FindProductsDto]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "findOneByName", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Admin updates category' }),
    (0, is_admin_decorator_1.IsAdmin)(),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_category_dto_1.UpdateCategoryDto]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Admin deletes category' }),
    (0, is_admin_decorator_1.IsAdmin)(),
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "remove", null);
CategoryController = __decorate([
    (0, swagger_1.ApiTags)('category'),
    (0, common_1.Controller)('category'),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryController);
exports.CategoryController = CategoryController;
//# sourceMappingURL=category.controller.js.map