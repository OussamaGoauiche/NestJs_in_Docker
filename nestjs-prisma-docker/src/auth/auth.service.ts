import {HttpException, HttpStatus, Injectable, Logger} from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import {CreateUserDto, LoginUserDto} from "../users/user.dto";
import {JwtPayload} from "./jwt.strategy";
import {PrismaService} from "../prisma.service";
import {User} from '@prisma/client'
import {hash} from "bcrypt";
import { MailService } from '../mail/mail.service';
import { User1 } from '../users/user1.entity';
// import {User} from "../users/user.entity";

@Injectable()
export class AuthService {
    private readonly logger = new Logger(AuthService.name)
    constructor(
        private readonly prisma: PrismaService,
        private readonly jwtService: JwtService,
        private readonly usersService: UsersService,
        private mailService: MailService
    ) {}

    async signUp(user: CreateUserDto) {
     this.logger.log('signUp', user);
     await this.mailService.sendUserConfirmation(user);
  }

  

    async register(userDto: CreateUserDto):
        Promise<RegistrationStatus> {
        this.logger.log('register', userDto);
        let status: RegistrationStatus = {
            success: true,
            message: "ACCOUNT_CREATE_SUCCESS",
        };

        try {
            status.data = await this.usersService.create(userDto);
            this.signUp(userDto)
        } catch (err) {
            status = {
                success: false,
                message: err,
            };
        }
        return status;
    }

    async login(loginUserDto: LoginUserDto): Promise<any> {

        this.logger.log('login', loginUserDto)
        // find user in db
        const user = await 
             this.usersService.findByLogin(loginUserDto);

        // generate and sign token
        const token = this._createToken(user);

        return {
            ...token,
            data: user
        };
    }

    private _createToken({ login }): any {
        this.logger.log('createToken', login);
        const user: JwtPayload = { login };
        const Authorization = this.jwtService.sign(user);
        return {
            expiresIn: process.env.EXPIRESIN,
            Authorization,
        };
    }


    async validateUser(payload: JwtPayload): Promise<any> {
        this.logger.log('validateUser')
        const user = await this.usersService.findByPayload(payload);
        if (!user) {
            throw new HttpException("INVALID_TOKEN", 
               HttpStatus.UNAUTHORIZED);
        }
        return user;
    }

    async verifyAccount(email :string): Promise<any> {
    this.logger.log('verifyAccount')    
    this.usersService.emailVerification(email);
    this.mailService.sendUserValidation(email);
}

}

export interface RegistrationStatus{
    success: boolean;
    message: string;
    data?: User;
}
export interface RegistrationSeederStatus {
    success: boolean;
    message: string;
    data?: User[];
}