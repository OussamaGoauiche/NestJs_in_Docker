import { PrismaService } from './../prisma.service';
import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';

@Module({
  imports: [PrismaService],
  controllers: [MessagesController],
  providers: [MessagesService, PrismaService]
})
export class MessagesModule {}
