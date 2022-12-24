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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const currency_js_1 = __importDefault(require("currency.js"));
const prisma_service_1 = require("../../prisma/prisma.service");
const not_purchase_owner_exception_1 = require("./exceptions/not-purchase-owner.exception");
let PurchaseService = class PurchaseService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(userId, createPurchaseDto) {
        const totalPrice = await this.calculateTotalPrice(createPurchaseDto);
        const purchase = await this.prisma.purchase.create({
            data: Object.assign(Object.assign({}, createPurchaseDto), { userId, totalPrice }),
            include: {
                user: { select: { email: true } },
                product: { select: { name: true } },
            },
        });
        return purchase;
    }
    async findAll({ userId, productId, page = 1, offset = 10, }) {
        const purchasesToSkip = (page - 1) * offset;
        const purchases = await this.prisma.purchase.findMany({
            skip: purchasesToSkip,
            take: offset,
            where: {
                userId: { equals: userId },
                productId: { equals: productId },
            },
            orderBy: { createdAt: 'desc' },
            include: {
                user: { select: { email: true } },
                product: { select: { name: true } },
            },
        });
        return purchases;
    }
    async findOne(purchaseId, userId, userRole) {
        const purchase = await this.prisma.purchase.findUnique({
            where: { id: purchaseId },
            include: {
                user: { select: { email: true } },
                product: { select: { name: true } },
            },
            rejectOnNotFound: true,
        });
        if (userRole !== client_1.Role.ADMIN && purchase.userId !== userId) {
            throw new not_purchase_owner_exception_1.NotPurchaseOwnerException();
        }
        return purchase;
    }
    async review(userId, purchaseId, reviewPurchaseDto) {
        const purchase = await this.prisma.purchase.findUnique({
            where: { id: purchaseId },
            rejectOnNotFound: true,
        });
        if (userId !== purchase.userId) {
            throw new not_purchase_owner_exception_1.NotPurchaseOwnerException();
        }
        return this.prisma.purchase.update({
            where: { id: purchaseId },
            data: Object.assign({}, reviewPurchaseDto),
            include: {
                user: { select: { email: true } },
                product: { select: { name: true } },
            },
        });
    }
    async update(id, updatePurchaseDto) {
        const purchase = await this.prisma.purchase.findUnique({ where: { id } });
        const productId = updatePurchaseDto.productId || purchase.productId;
        const amount = updatePurchaseDto.amount || purchase.amount;
        const totalPrice = await this.calculateTotalPrice({ productId, amount });
        const updatedPurchase = await this.prisma.purchase.update({
            where: { id },
            data: Object.assign(Object.assign({}, updatePurchaseDto), { totalPrice }),
            include: {
                user: { select: { email: true } },
                product: { select: { name: true } },
            },
        });
        return updatedPurchase;
    }
    async remove(id) {
        await this.prisma.purchase.delete({ where: { id } });
    }
    async calculateTotalPrice(createPurchaseDto) {
        const { basePrice } = await this.prisma.product.findUnique({
            where: { id: createPurchaseDto.productId },
        });
        const totalPrice = (0, currency_js_1.default)(basePrice.toNumber()).multiply(createPurchaseDto.amount);
        return totalPrice.value;
    }
};
PurchaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PurchaseService);
exports.PurchaseService = PurchaseService;
//# sourceMappingURL=purchase.service.js.map