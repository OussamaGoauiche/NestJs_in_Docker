import { Injectable, Logger } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import {PrismaService} from "../prisma.service"
import {  Prisma } from "@prisma/client";
@Injectable()
export class MessagesService {
  private readonly logger = new Logger(MessagesService.name)
  constructor(
        private prisma: PrismaService,
    ) {
    }

  async create(createMessageDto: CreateMessageDto) {
    this.logger.log("create message ", createMessageDto);
     return await this.prisma.message.create(
       {
          data: {
          ...createMessageDto,
        },
        });
  }

  async findAll() {
    this.logger.log("find all messages");
    return await this.prisma.message.findMany();
  }

  async findOne(id: number) {
    this.logger.log(`return messages id = ${id}`);
    return await this.prisma.message.findUnique({
            where: {id_message : id}
        });
  }

  async remove(where: Prisma.MessageWhereUniqueInput) {
    this.logger.log(`removed messages `);
    return await this.prisma.message.delete({ where, });
  }
}
