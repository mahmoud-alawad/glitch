import { CreateUserDto } from './dto/create-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';
import { LoginUser } from './dto/login-user.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserWithoutPassword } from './entities/user-without-password.entity';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<void>;
    findById(request: Request): Promise<UserWithoutPassword>;
    update(request: Request, updateUserDto: UpdateUserDto): Promise<UserWithoutPassword>;
    updateUserRole(updateUserRoleDto: UpdateUserRoleDto): Promise<UserWithoutPassword>;
    remove(request: Request, deleteUserDto: DeleteUserDto): Promise<void>;
    login(user: LoginUser): Promise<string | {
        id: string;
        email: string;
        name: string;
        address: string;
        role: import(".prisma/client").Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
