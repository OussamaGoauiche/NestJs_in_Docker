/* eslint-disable prettier/prettier */
import { SomePaypalService } from './some-paypal.service';
import { ClassSerializerInterceptor, Controller, Get, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiSecurity } from '@nestjs/swagger';

@Controller('some-paypal')
export class SomePaypalController {

        constructor(private readonly somePaypalService: SomePaypalService) {}
        @Post()
        @UseGuards(JwtAuthGuard)
        @ApiSecurity('access-key')
        @UseInterceptors(ClassSerializerInterceptor)
        pay():any{
        return this.somePaypalService.payout();
  }
}

