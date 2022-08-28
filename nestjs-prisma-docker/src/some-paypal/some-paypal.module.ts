/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { NestjsPaypalPayoutsModule } from 'nestjs-paypal-payouts';
import { SomePaypalService } from './some-paypal.service';
import { SomePaypalController } from './some-paypal.controller';

@Module({
  imports: [
    NestjsPaypalPayoutsModule.register({
      environment: process.env.PAYPAL_ENVIRONMENT as 'sandbox' | 'live',
      clientId: process.env.PAYPAL_CLIENT_ID,
      clientSecret: process.env.PAYPAL_CLIENT_SECRET,
    }),
  ],
  providers: [SomePaypalService],
  controllers: [SomePaypalController]
})
export class SomePaypalModule {}
