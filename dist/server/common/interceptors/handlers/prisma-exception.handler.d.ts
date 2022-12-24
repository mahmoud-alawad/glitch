import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { ExceptionHandler } from './exception.handler';
export declare class PrismaExceptionHandler implements ExceptionHandler {
    handle(error: PrismaClientKnownRequestError): void;
    private isPrismaUnknownError;
    private isEmailConstraintViolation;
    private isProductNameConstraintViolation;
    private isCategoryNameConstraintViolation;
    private isUserError;
    private isProductError;
    private isCreateProductError;
    private isCategoryError;
    private isPurchaseError;
}
