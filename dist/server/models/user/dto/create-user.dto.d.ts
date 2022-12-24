import { User } from '../entities/user.entity';
export declare class CreateUserDto implements User {
    email: string;
    password: string;
    name?: string;
    address?: string;
}
