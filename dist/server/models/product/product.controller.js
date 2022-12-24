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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const public_decorator_1 = require("../../auth/public.decorator");
const file_upload_decorator_1 = require("../../common/decorators/file-upload.decorator");
const is_admin_decorator_1 = require("../../common/decorators/is-admin.decorator");
const create_product_dto_1 = require("./dto/create-product.dto");
const find_products_dto_1 = require("./dto/find-products.dto");
const update_product_dto_1 = require("./dto/update-product.dto");
const product_service_1 = require("./product.service");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    create(createProductDto) {
        return this.productService.create(createProductDto);
    }
    findAll(findAllProductsDto) {
        return this.productService.findAll(findAllProductsDto);
    }
    findOneById(id) {
        return this.productService.findOneById(id);
    }
    findOneByUrlName(urlName) {
        return this.productService.findOneByUrlName(urlName);
    }
    uploadPhoto(id, file) {
        return this.productService.uploadPicture(id, file);
    }
    update(id, updateProductDto) {
        return this.productService.update(id, updateProductDto);
    }
    remove(id) {
        return this.productService.remove(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Admin creates a new product' }),
    (0, is_admin_decorator_1.IsAdmin)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Returns all products' }),
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_products_dto_1.FindProductsDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Admin gets product by ID' }),
    (0, is_admin_decorator_1.IsAdmin)(),
    (0, common_1.Get)('/id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findOneById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Gets product by urlName' }),
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':urlName'),
    __param(0, (0, common_1.Param)('urlName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findOneByUrlName", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Admin uploads a new product picture' }),
    (0, is_admin_decorator_1.IsAdmin)(),
    (0, file_upload_decorator_1.FileUpload)(),
    (0, common_1.Patch)('picture/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "uploadPhoto", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Admin updates product' }),
    (0, is_admin_decorator_1.IsAdmin)(),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_dto_1.UpdateProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Admin deletes product' }),
    (0, is_admin_decorator_1.IsAdmin)(),
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "remove", null);
ProductController = __decorate([
    (0, swagger_1.ApiTags)('product'),
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map