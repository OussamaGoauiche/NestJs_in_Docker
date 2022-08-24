import { Module } from '@nestjs/common';
import { HistoriqueService } from './historique.service';
import { HistoriqueController } from './historique.controller';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard } from '@nestjs/throttler';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [HistoriqueController],
  providers: [PrismaService,
    {
  provide: APP_GUARD,
  useClass: ThrottlerGuard
}
,HistoriqueService]
})
export class HistoriqueModule {}
