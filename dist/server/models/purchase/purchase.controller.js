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
exports.PurchaseController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const is_admin_decorator_1 = require("../../common/decorators/is-admin.decorator");
const create_purchase_dto_1 = require("./dto/create-purchase.dto");
const find_purchases_dto_1 = require("./dto/find-purchases.dto");
const review_purchase_dto_1 = require("./dto/review-purchase.dto");
const update_purchase_dto_1 = require("./dto/update-purchase.dto");
const purchase_service_1 = require("./purchase.service");
let PurchaseController = class PurchaseController {
    constructor(purchaseService) {
        this.purchaseService = purchaseService;
    }
    async create(request, createPurchaseDto) {
        const { userId } = request.user;
        return this.purchaseService.create(userId, createPurchaseDto);
    }
    async findAll(findPurchasesDto) {
        return this.purchaseService.findAll(findPurchasesDto);
    }
    async findAllMine(request, findPurchasesDto) {
        const { userId } = request.user;
        findPurchasesDto.userId = userId;
        return this.purchaseService.findAll(findPurchasesDto);
    }
    async findOne(request, purchaseId) {
        const { userId, userRole } = request.user;
        return this.purchaseService.findOne(purchaseId, userId, userRole);
    }
    async review(request, purchaseId, reviewPurchaseDto) {
        const { userId } = request.user;
        return this.purchaseService.review(userId, purchaseId, reviewPurchaseDto);
    }
    async update(id, updatePurchaseDto) {
        return this.purchaseService.update(id, updatePurchaseDto);
    }
    async remove(id) {
        return this.purchaseService.remove(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Creates a new purchase' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_purchase_dto_1.CreatePurchaseDto]),
    __metadata("design:returntype", Promise)
], PurchaseController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Admin gets all purchases' }),
    (0, is_admin_decorator_1.IsAdmin)(),
    (0, common_1.Get)('/admin'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_purchases_dto_1.FindPurchasesDto]),
    __metadata("design:returntype", Promise)
], PurchaseController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'User gets all their purchases' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, find_purchases_dto_1.FindPurchasesDto]),
    __metadata("design:returntype", Promise)
], PurchaseController.prototype, "findAllMine", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Returns purchase by ID' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], PurchaseController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Reviews purchased product' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Patch)('/review/:id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, review_purchase_dto_1.ReviewPurchaseDto]),
    __metadata("design:returntype", Promise)
], PurchaseController.prototype, "review", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Admin updates purchase' }),
    (0, is_admin_decorator_1.IsAdmin)(),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_purchase_dto_1.UpdatePurchaseDto]),
    __metadata("design:returntype", Promise)
], PurchaseController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Admin deletes purchase' }),
    (0, is_admin_decorator_1.IsAdmin)(),
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PurchaseController.prototype, "remove", null);
PurchaseController = __decorate([
    (0, swagger_1.ApiTags)('purchase'),
    (0, common_1.Controller)('purchase'),
    __metadata("design:paramtypes", [purchase_service_1.PurchaseService])
], PurchaseController);
exports.PurchaseController = PurchaseController;
//# sourceMappingURL=purchase.controller.js.map