"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaExceptionHandler = void 0;
const runtime_1 = require("@prisma/client/runtime");
const prisma_error_enum_1 = require("prisma-error-enum");
const category_name_in_use_exception_1 = require("../../exceptions/category/category-name-in-use.exception");
const category_not_found_exception_1 = require("../../exceptions/category/category-not-found.exception");
const product_name_in_use_exception_1 = require("../../exceptions/product/product-name-in-use.exception");
const product_not_found_exception_1 = require("../../exceptions/product/product-not-found.exception");
const purchase_not_found_exception_1 = require("../../exceptions/purchase/purchase-not-found.exception");
const email_in_use_exception_1 = require("../../exceptions/user/email-in-use.exception");
const user_not_found_exception_1 = require("../../exceptions/user/user-not-found.exception");
class PrismaExceptionHandler {
    handle(error) {
        if (error instanceof runtime_1.PrismaClientKnownRequestError) {
            switch (error.code) {
                case prisma_error_enum_1.PrismaError.UniqueConstraintViolation:
                    if (this.isEmailConstraintViolation(error.meta)) {
                        throw new email_in_use_exception_1.EmailInUseException();
                    }
                    if (this.isProductNameConstraintViolation(error)) {
                        throw new product_name_in_use_exception_1.ProductNameInUseException();
                    }
                    if (this.isCategoryNameConstraintViolation(error)) {
                        throw new category_name_in_use_exception_1.CategoryNameInUseException();
                    }
                    break;
                case prisma_error_enum_1.PrismaError.ForeignConstraintViolation:
                    if (this.isPurchaseError(error)) {
                        throw new product_not_found_exception_1.ProductNotFoundException();
                    }
                    break;
                case prisma_error_enum_1.PrismaError.RecordsNotFound:
                    if (this.isUserError(error)) {
                        throw new user_not_found_exception_1.UserNotFoundException();
                    }
                    if (this.isProductError(error)) {
                        throw new product_not_found_exception_1.ProductNotFoundException();
                    }
                    if (this.isCreateProductError(error)) {
                        throw new category_not_found_exception_1.CategoryNotFoundException();
                    }
                    if (this.isCategoryError(error)) {
                        throw new category_not_found_exception_1.CategoryNotFoundException();
                    }
                    if (this.isPurchaseError(error)) {
                        throw new purchase_not_found_exception_1.PurchaseNotFoundException();
                    }
                    break;
                default:
                    throw error;
            }
        }
        if (this.isPrismaUnknownError(error)) {
            if (error.message === 'No Product found') {
                throw new product_not_found_exception_1.ProductNotFoundException();
            }
            if (error.message === 'No Category found') {
                throw new category_not_found_exception_1.CategoryNotFoundException();
            }
            if (error.message === 'No Purchase found') {
                throw new purchase_not_found_exception_1.PurchaseNotFoundException();
            }
        }
    }
    isPrismaUnknownError(error) {
        return !!error.clientVersion;
    }
    isEmailConstraintViolation(errorMeta) {
        return Object.values(errorMeta)[0][0] === 'email';
    }
    isProductNameConstraintViolation(error) {
        return ((Object.values(error.meta)[0][0] === 'name' ||
            Object.values(error.meta)[0][0] === 'urlName') &&
            error.message.includes('prisma.product'));
    }
    isCategoryNameConstraintViolation(error) {
        return (Object.values(error.meta)[0][0] === 'name' &&
            error.message.includes('prisma.category'));
    }
    isUserError(error) {
        return error.message.includes('prisma.user');
    }
    isProductError(error) {
        return (error.message.includes('prisma.product.update') ||
            error.message.includes('prisma.product.delete'));
    }
    isCreateProductError(error) {
        return error.message.includes('prisma.product.create');
    }
    isCategoryError(error) {
        return error.message.includes('prisma.category');
    }
    isPurchaseError(error) {
        return error.message.includes('prisma.purchase');
    }
}
exports.PrismaExceptionHandler = PrismaExceptionHandler;
//# sourceMappingURL=prisma-exception.handler.js.map