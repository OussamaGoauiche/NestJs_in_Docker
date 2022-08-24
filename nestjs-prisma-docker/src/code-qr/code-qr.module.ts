import { Module } from '@nestjs/common';
import { CodeQrService } from './code-qr.service';
import { CodeQrController } from './code-qr.controller';
import { ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  controllers: [CodeQrController],
  providers: [{
  provide: APP_GUARD,
  useClass: ThrottlerGuard
}
,CodeQrService]
})
export class CodeQrModule {}
