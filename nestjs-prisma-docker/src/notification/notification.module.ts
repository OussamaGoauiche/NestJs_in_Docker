import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard } from '@nestjs/throttler';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [NotificationController],
  providers: [PrismaService,{
  provide: APP_GUARD,
  useClass: ThrottlerGuard
}
,NotificationService]
})
export class NotificationModule {}
