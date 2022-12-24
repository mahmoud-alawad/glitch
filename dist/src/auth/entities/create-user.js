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
exports.CreateUser = void 0;
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
class CreateUser {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String, nullable: false }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUser.prototype, "userName", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, swagger_1.ApiProperty)({ type: String, nullable: false }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUser.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String, nullable: false }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUser.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String, nullable: false }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUser.prototype, "phoneNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ enum: client_1.Country, nullable: false }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUser.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String, nullable: false }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUser.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String, nullable: true }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUser.prototype, "addressNote", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String, nullable: false }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUser.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String, nullable: false }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUser.prototype, "postalCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String, nullable: false }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUser.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, swagger_1.ApiProperty)({ type: String, nullable: false }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUser.prototype, "dateOfBirth", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String, nullable: true }),
    __metadata("design:type", String)
], CreateUser.prototype, "orderId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ enum: client_1.Role, nullable: true }),
    __metadata("design:type", String)
], CreateUser.prototype, "role", void 0);
exports.CreateUser = CreateUser;
//# sourceMappingURL=create-user.js.map