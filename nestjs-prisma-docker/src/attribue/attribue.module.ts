import { Module } from '@nestjs/common';
import { AttribueService } from './attribue.service';
import { AttribueController } from './attribue.controller';
import { PrismaService } from '../prisma.service';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard } from '@nestjs/throttler';

@Module({
  controllers: [AttribueController],
  providers: [PrismaService,{
  provide: APP_GUARD,
  useClass: ThrottlerGuard
}
,AttribueService]
})
export class AttribueModule {}
