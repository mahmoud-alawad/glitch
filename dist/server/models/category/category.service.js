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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let CategoryService = class CategoryService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createCategoryDto) {
        const name = this.capitalizeOnlyFirstLetter(createCategoryDto.name);
        const category = await this.prisma.category.create({
            data: Object.assign(Object.assign({}, createCategoryDto), { name }),
        });
        return category;
    }
    async findAll({ categoryName = '', page = 1, offset = 10, }) {
        const categoriesToSkip = (page - 1) * offset;
        return this.prisma.category.findMany({
            skip: categoriesToSkip,
            take: offset,
            where: {
                name: { contains: categoryName, mode: 'insensitive' },
            },
            orderBy: { name: 'asc' },
        });
    }
    async findOneById(id, { productName = '', page = 1, offset = 10 }) {
        const productsToSkip = (page - 1) * offset;
        const category = await this.prisma.category.findUnique({
            where: { id },
            include: {
                products: {
                    select: { id: true, name: true, urlName: true, picture: true },
                    where: { name: { contains: productName, mode: 'insensitive' } },
                    skip: productsToSkip,
                    take: offset,
                },
            },
            rejectOnNotFound: true,
        });
        return category;
    }
    async findOneByName(name, { productName = '', page = 1, offset = 10 }) {
        const productsToSkip = (page - 1) * offset;
        name = this.capitalizeOnlyFirstLetter(name);
        const category = await this.prisma.category.findUnique({
            where: { name },
            include: {
                products: {
                    select: { id: true, name: true, urlName: true, picture: true },
                    where: { name: { contains: productName, mode: 'insensitive' } },
                    skip: productsToSkip,
                    take: offset,
                },
            },
            rejectOnNotFound: true,
        });
        return category;
    }
    async update(id, updateCategoryDto) {
        if (updateCategoryDto.name) {
            return this.updateCategoryAndName(id, updateCategoryDto);
        }
        const category = await this.prisma.category.update({
            where: { id },
            data: Object.assign({}, updateCategoryDto),
        });
        return category;
    }
    async remove(id) {
        await this.prisma.category.delete({ where: { id } });
    }
    capitalizeOnlyFirstLetter(name) {
        return name[0].toUpperCase() + name.substring(1).toLocaleLowerCase();
    }
    updateCategoryAndName(id, updateCategoryDto) {
        const name = this.capitalizeOnlyFirstLetter(updateCategoryDto.name);
        return this.prisma.category.update({
            where: { id },
            data: Object.assign(Object.assign({}, updateCategoryDto), { name }),
        });
    }
};
CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map