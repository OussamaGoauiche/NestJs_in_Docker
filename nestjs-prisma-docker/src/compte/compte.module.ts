import { PrismaService } from './../prisma.service';
import { Module } from '@nestjs/common';
import { CompteService } from './compte.service';
import { CompteController } from './compte.controller';

@Module({
  controllers: [CompteController],
  providers: [CompteService,PrismaService]
})
export class CompteModule {}
