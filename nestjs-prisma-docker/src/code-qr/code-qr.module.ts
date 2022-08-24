import { Module } from '@nestjs/common';
import { CodeQrService } from './code-qr.service';
import { CodeQrController } from './code-qr.controller';
import { ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [CodeQrController],
  providers: [PrismaService,{
  provide: APP_GUARD,
  useClass: ThrottlerGuard
}
,CodeQrService]
})
export class CodeQrModule {}
