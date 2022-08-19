import { User1 } from '../users/user1.entity';
import { User } from '@prisma/client';
import {
    Body,
    Controller,
    Delete,
    Get,
    HttpException,
    HttpStatus,
    Param,
    Post,
    UseGuards,
    UseInterceptors
} from '@nestjs/common';
import {AuthService, RegistrationSeederStatus, RegistrationStatus} from "./auth.service";
import {CreateUserDto, LoginUserDto } from "../users/user.dto";
import {ApiBearerAuth, ApiSecurity, ApiTags} from "@nestjs/swagger";
import { Roles } from '../roles/decorator';
import { Role } from '../enums/role.enums';
import { DEFAULT_ECDH_CURVE } from 'tls';



@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        ) {}

    @Post('register')
    @Roles(Role.User)
    public async register(@Body() createUserDto: CreateUserDto,  ): 
       Promise<RegistrationStatus> {
        const result:RegistrationStatus = await 
              this.authService.register(createUserDto);
        if (!result.success) {
            throw new HttpException(result.message,  
               HttpStatus.BAD_REQUEST);
        }
        return result;
    }
    
    @Post('login')
    @Roles(Role.Admin)
    public async login(@Body() loginUserDto: LoginUserDto): 
       Promise<any> {
        return await this.authService.login(loginUserDto);
    }
    
    @Get('verify/:email')
    async Verify(@Param() params) {
    console.log(params.email)
    return await this.authService.verifyAccount(
            params.email
        );
 }
}