import { PrismaService } from './../prisma.service';
import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard } from '@nestjs/throttler';

@Module({
  imports: [PrismaService],
  controllers: [MessagesController],
  providers: [{
  provide: APP_GUARD,
  useClass: ThrottlerGuard
}
,MessagesService, PrismaService]
})
export class MessagesModule {}
