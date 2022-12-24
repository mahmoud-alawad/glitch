import { PrismaService } from 'server/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserWithoutPassword } from './entities/user-without-password.entity';
import { User } from './entities/user.entity';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<void>;
    findById(id: string): Promise<UserWithoutPassword>;
    findByEmail(email: string): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<UserWithoutPassword>;
    updateUserRole(updateUserRoleDto: UpdateUserRoleDto): Promise<UserWithoutPassword>;
    remove(id: string, deleteUserDto: DeleteUserDto): Promise<void>;
    private hashIfUpdatingPassword;
    private validateCurrentPassword;
    validateLogin(email: string, currentPassword: string): Promise<string | {
        id: string;
        email: string;
        name: string;
        address: string;
        role: import(".prisma/client").Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
