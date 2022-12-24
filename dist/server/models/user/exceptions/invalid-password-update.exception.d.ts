import { UserServiceInputException } from './user-service-input.exception';
export declare class InvalidPasswordUpdateException extends UserServiceInputException {
    constructor();
    invalidPassword(): string;
    generalMessage(): string;
    empltyCredentials(email: string): string;
}
