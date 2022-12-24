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
exports.ShopsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
const create_shop_dto_1 = require("../entities/dto/create-shop.dto");
let ShopsService = class ShopsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createShop(CreateShopDto) {
        const shopAlreadyExists = await this.prisma.shop.findUnique({
            where: { name: create_shop_dto_1.createShopDto.name },
        });
        if (shopAlreadyExists)
            throw new common_1.BadRequestException('Shop already exists');
        return this.prisma.shop.create({ data: CreateShopDto });
    }
    async readAllShops() {
        return this.prisma.shop.findMany();
    }
    async getShopById(id) {
        const findShop = await this.prisma.shop.findUnique({ where: { id: id } });
        if (!findShop)
            throw new common_1.NotFoundException('shop not found');
        return findShop;
    }
    async updateShop(id, shopData) {
        const findShop = await this.prisma.shop.findUnique({ where: { id: id } });
        if (!findShop)
            throw new common_1.NotFoundException('Shop Not Found');
        return await this.prisma.shop.update({
            where: { id: id },
            data: shopData,
        });
    }
    async deleteShop(id) {
        const findShop = await this.prisma.shop.findUnique({ where: { id: id } });
        if (!findShop)
            throw new common_1.NotFoundException('Shop Not Found');
        return await this.prisma.shop.delete({ where: { id: id } });
    }
    async getShopProducts(id) {
        const findShop = await this.prisma.shop.findUnique({ where: { id: id } });
        if (!findShop)
            throw new common_1.NotFoundException('Shop Does not exists');
        return await this.prisma.product.findMany({
            where: { shopId: findShop.id },
        });
    }
};
ShopsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ShopsService);
exports.ShopsService = ShopsService;
//# sourceMappingURL=shops.service.js.map