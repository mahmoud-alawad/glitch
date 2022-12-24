import { CreateUser } from '../entities/create-user';
import { AuthService } from '../service/auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(createUser: CreateUser): Promise<import(".prisma/client").User>;
    logout(id: number): Promise<number>;
    login(req: any): Promise<{
        access_token: string;
    }>;
    getUserInfo(req: any): any;
}
