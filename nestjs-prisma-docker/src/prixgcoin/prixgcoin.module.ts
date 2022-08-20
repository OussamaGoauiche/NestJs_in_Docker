import { Module } from '@nestjs/common';
import { PrixgcoinService } from './prixgcoin.service';
import { PrixgcoinController } from './prixgcoin.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [PrixgcoinController],
  providers: [PrixgcoinService,PrismaService],
})
export class PrixgcoinModule {}
