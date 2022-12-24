import { User } from './user.entity';
declare const UserWithoutPassword_base: import("@nestjs/common").Type<Omit<User, "password">>;
export declare class UserWithoutPassword extends UserWithoutPassword_base {
}
export {};
