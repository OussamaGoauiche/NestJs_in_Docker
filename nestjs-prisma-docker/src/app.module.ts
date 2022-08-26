import { PrismaService } from './prisma.service';

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';
import { MessagesModule } from './messages/messages.module';
import { PrixgcoinModule } from './prixgcoin/prixgcoin.module';
import { HistoriqueModule } from './historique/historique.module';
import { TransactionModule } from './transaction/transaction.module';
import { CodeQrModule } from './code-qr/code-qr.module';
import { NotificationModule } from './notification/notification.module';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { AttribueModule } from './attribue/attribue.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),AuthModule, UsersModule, MailModule,
   ConfigModule.forRoot({
      isGlobal: true, // no need to import into other modules
    }),
   MessagesModule,
   PrixgcoinModule,
   HistoriqueModule,
   TransactionModule,
   CodeQrModule,
   NotificationModule,
   UtilisateurModule,
   AttribueModule,
  ],
  controllers: [AppController],
  providers: [{
  provide: APP_GUARD,
  useClass: ThrottlerGuard
}
,AppService,PrismaService],
})
export class AppModule {}
