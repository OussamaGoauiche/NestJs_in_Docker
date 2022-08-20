import { Module } from '@nestjs/common';
import { CodeQrService } from './code-qr.service';
import { CodeQrController } from './code-qr.controller';

@Module({
  controllers: [CodeQrController],
  providers: [CodeQrService]
})
export class CodeQrModule {}
