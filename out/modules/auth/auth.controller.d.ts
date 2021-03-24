import { AuthService } from './auth.service';
import { UserDto } from '../users/dto/user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        user: any;
        token: string;
    }>;
    register(user: UserDto): Promise<{
        user: any;
        token: string;
    }>;
}
