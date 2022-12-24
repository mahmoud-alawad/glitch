import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
  Request,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Public } from 'server/auth/public.decorator';
import { IsAdmin } from 'server/common/decorators/is-admin.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';
import { LoginUser } from './dto/login-user.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserWithoutPassword } from './entities/user-without-password.entity';
import { UserService } from './user.service';

/** Exposes user CRUD endpoints */
@ApiTags('user')
@Controller('user')
export class UserController {
  /** Exposes user CRUD endpoints
   *
   * Instantiate class and UserService dependency
   */
  constructor(private readonly userService: UserService) {}

  /** Creates a new user */
  @ApiOperation({ summary: 'Creates a new user' })
  @Public()
  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<void> {
    return this.userService.create(createUserDto);
  }

  /** Returns user's own profile information without password */
  @ApiOperation({ summary: "Gets user's own profile" })
  @ApiBearerAuth()
  @Get()
  async findById(@Req() request: Request): Promise<UserWithoutPassword> {
    //@ts-ignore
    const userId = request.user['userId'];

    return this.userService.findById(userId);
  }

  /** Updates user information */
  @ApiOperation({ summary: 'Updates user' })
  @ApiBearerAuth()
  @Patch()
  update(
    @Req() request: Request,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserWithoutPassword> {
    //@ts-ignore
    const userId = request.user['userId'];

    return this.userService.update(userId, updateUserDto);
  }

  /** Updates user role, only for admins */
  @ApiOperation({ summary: "Admin set user's role" })
  @IsAdmin()
  @Patch('role')
  updateUserRole(
    @Body() updateUserRoleDto: UpdateUserRoleDto,
  ): Promise<UserWithoutPassword> {
    return this.userService.updateUserRole(updateUserRoleDto);
  }

  /** Deletes user and all user related information from the system */
  @ApiOperation({ summary: 'Deletes user' })
  @ApiBearerAuth()
  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(
    @Req() request: Request,
    @Body() deleteUserDto: DeleteUserDto,
  ): Promise<void> {
    //@ts-ignore
    const userId = request.user['userId'];

    return this.userService.remove(userId, deleteUserDto);
  }

  @ApiOperation({ summary: 'login user' })
  @Post('login')
  @Public()
  async login(@Body() user: LoginUser) {
    return this.userService.validateLogin(user.email,user.password);
  }
}
