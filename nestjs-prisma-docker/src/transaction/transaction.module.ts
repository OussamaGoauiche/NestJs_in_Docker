import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard } from '@nestjs/throttler';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [TransactionController],
  providers: [PrismaService,{
  provide: APP_GUARD,
  useClass: ThrottlerGuard
}
,TransactionService]
})
export class TransactionModule {}
