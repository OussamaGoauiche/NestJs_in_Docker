import { Module } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { UtilisateurController } from './utilisateur.controller';
import { PrismaService } from '../prisma.service';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard } from '@nestjs/throttler';

@Module({
  controllers: [UtilisateurController],
  providers: [{
  provide: APP_GUARD,
  useClass: ThrottlerGuard
}
,PrismaService,UtilisateurService]
})
export class UtilisateurModule {}
