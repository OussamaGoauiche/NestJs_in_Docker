import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Put,
    Query,
    Request,
    UseGuards,
    UseInterceptors
} from '@nestjs/common';
import {ApiQuery, ApiSecurity, ApiTags} from "@nestjs/swagger";
import {UsersService} from "./users.service";

import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {AuthGuard} from "@nestjs/passport";
import {UpdatePasswordDto} from "./user.dto";
import { Roles } from '../roles/decorator';
import { Role } from '../enums/role.enums';

@Controller('user')
@ApiTags('user')
export class UsersController {
    constructor(
        private readonly usersService: UsersService) {}

    
    @UseGuards(JwtAuthGuard)
    @ApiSecurity('access-key')
    @UseInterceptors(ClassSerializerInterceptor)
    @Put('update/password')
    @Roles(Role.User)
    public async updatePassword(@Request() req, @Body() 
                   updatePasswordDto: UpdatePasswordDto) {
        await this.usersService
         .updatePassword(updatePasswordDto, req.user.id);
        return {
            message: "password_update_success"
        };
    }

}