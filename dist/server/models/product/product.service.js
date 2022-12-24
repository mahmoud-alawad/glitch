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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ProductService = class ProductService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createProductDto) {
        const urlName = this.formatUrlName(createProductDto.name);
        const categories = this.connectCategoriesById(createProductDto.categories);
        const product = await this.prisma.product.create({
            data: Object.assign(Object.assign({}, createProductDto), { urlName,
                categories }),
            include: { categories: { select: { name: true } } },
        });
        return product;
    }
    async uploadPicture(id, file) {
        return this.prisma.product.update({
            where: { id },
            data: { picture: file.filename },
        });
    }
    async findAll({ productName = '', page = 1, offset = 10, }) {
        const productsToSkip = (page - 1) * offset;
        return this.prisma.product.findMany({
            skip: productsToSkip,
            take: offset,
            where: {
                name: { contains: productName, mode: 'insensitive' },
            },
            orderBy: { name: 'asc' },
            include: { categories: { select: { name: true } } },
        });
    }
    async findOneById(id) {
        return this.prisma.product.findUnique({
            where: { id },
            include: { categories: { select: { name: true } } },
            rejectOnNotFound: true,
        });
    }
    async findOneByUrlName(urlName) {
        return this.prisma.product.findUnique({
            where: { urlName },
            include: { categories: { select: { name: true } } },
            rejectOnNotFound: true,
        });
    }
    async update(id, updateProductDto) {
        if (updateProductDto.name) {
            return this.updateProductAndUrlName(id, updateProductDto);
        }
        return this.prisma.product.update({
            where: { id },
            data: Object.assign({}, updateProductDto),
        });
    }
    async remove(id) {
        await this.prisma.product.delete({ where: { id } });
    }
    formatUrlName(name) {
        const lowerCaseUrlName = name.toLocaleLowerCase();
        const trimmedUrlName = lowerCaseUrlName.trim();
        const singleSpaceUrlName = trimmedUrlName.replace(/\s\s+/g, ' ');
        const spaceToHyphenUrlName = singleSpaceUrlName.split(' ').join('-');
        return spaceToHyphenUrlName;
    }
    updateProductAndUrlName(id, updateProductDto) {
        const urlName = this.formatUrlName(updateProductDto.name);
        return this.prisma.product.update({
            where: { id },
            data: Object.assign(Object.assign({}, updateProductDto), { urlName }),
        });
    }
    connectCategoriesById(categories) {
        let categoriesConnection = { connect: [] };
        if (categories) {
            categoriesConnection = {
                connect: categories.map((category) => {
                    return { id: category };
                }),
            };
        }
        return categoriesConnection;
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map