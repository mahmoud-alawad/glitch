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
exports.ShopsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const http_exception_filter_1 = require("../../filters/http-exception.filter");
const create_shop_dto_1 = require("../entities/dto/create-shop.dto");
const update_shop_dto_1 = require("../entities/dto/update-shop.dto");
const shops_service_1 = require("../service/shops.service");
let ShopsController = class ShopsController {
    constructor(shopService) {
        this.shopService = shopService;
    }
    async newShop(shop) {
        const test = await this.shopService.createShop(shop);
        return test;
    }
    async returnAllShops() {
        const findAll = await this.shopService.readAllShops();
        return findAll;
    }
    async shopProducts(id) {
        return this.shopService.getShopProducts(id);
    }
    async updateShopData(id, data) {
        return await this.shopService.updateShop(id, data);
    }
    async delete(id) {
        return this.shopService.deleteShop(id);
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_shop_dto_1.createShopDto]),
    __metadata("design:returntype", Promise)
], ShopsController.prototype, "newShop", null);
__decorate([
    (0, common_1.Get)('search'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ShopsController.prototype, "returnAllShops", null);
__decorate([
    (0, common_1.Get)('search/products/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ShopsController.prototype, "shopProducts", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_shop_dto_1.updateShopDto]),
    __metadata("design:returntype", Promise)
], ShopsController.prototype, "updateShopData", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ShopsController.prototype, "delete", null);
ShopsController = __decorate([
    (0, common_1.Controller)('shops'),
    (0, common_1.UseFilters)(http_exception_filter_1.HttpExceptionFilter),
    (0, swagger_1.ApiTags)('Shops'),
    __metadata("design:paramtypes", [shops_service_1.ShopsService])
], ShopsController);
exports.ShopsController = ShopsController;
//# sourceMappingURL=shops.controller.js.map