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
exports.createProductDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class createProductDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], createProductDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], createProductDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Int32Array }),
    __metadata("design:type", Number)
], createProductDto.prototype, "stock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Float32Array }),
    __metadata("design:type", Number)
], createProductDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Int32Array }),
    __metadata("design:type", Number)
], createProductDto.prototype, "shopId", void 0);
exports.createProductDto = createProductDto;
//# sourceMappingURL=create-product.dto.js.map