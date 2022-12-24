import { ProductServiceInputException } from './product-service-input.exception';
export declare class FileTypeError extends ProductServiceInputException {
    constructor(fileTypes: RegExp);
}
