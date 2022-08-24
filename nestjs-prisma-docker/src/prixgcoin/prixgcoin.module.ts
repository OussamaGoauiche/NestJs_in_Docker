import { Module } from '@nestjs/common';
import { PrixgcoinService } from './prixgcoin.service';
import { PrixgcoinController } from './prixgcoin.controller';
import { PrismaService } from '../prisma.service';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard } from '@nestjs/throttler';

@Module({
  controllers: [PrixgcoinController],
  providers: [{
  provide: APP_GUARD,
  useClass: ThrottlerGuard
}
,PrixgcoinService,PrismaService],
})
export class PrixgcoinModule {}
