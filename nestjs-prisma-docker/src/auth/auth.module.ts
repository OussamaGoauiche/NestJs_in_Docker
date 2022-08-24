import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import {UsersModule} from "../users/users.module";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {JwtStrategy} from "./jwt.strategy";
import { AuthController } from './auth.controller';
import {UsersService} from "../users/users.service";
import {PrismaService} from "../prisma.service";
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from '../roles/guard';
import { MailModule } from '../mail/mail.module';
import { ThrottlerGuard } from '@nestjs/throttler';



@Module({
  imports: [
    UsersModule,
    MailModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.register({
      secret: process.env.SECRETKEY,
      signOptions: {
        expiresIn: process.env.EXPIRESIN,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [{
  provide: APP_GUARD,
  useClass: ThrottlerGuard
}
,AuthService, UsersService, JwtStrategy, PrismaService,
     {
    provide: APP_GUARD,
    useClass: RolesGuard,
  },
  ],
  exports: [
    PassportModule,
    JwtModule
  ],
})
export class AuthModule {
}