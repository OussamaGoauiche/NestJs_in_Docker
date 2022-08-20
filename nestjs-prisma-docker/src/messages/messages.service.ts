import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import {PrismaService} from "../prisma.service"
import {  Prisma } from "@prisma/client";
@Injectable()
export class MessagesService {

  constructor(
        private prisma: PrismaService,
    ) {
    }

  async create(createMessageDto: CreateMessageDto) {
     return await this.prisma.message.create(
       {
          data: {
          ...createMessageDto,
        },
        });
  }

  async findAll() {
    return await this.prisma.message.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.message.findUnique({
            where: {id_message : id}
        });
  }

  async remove(where: Prisma.MessageWhereUniqueInput) {
    return await this.prisma.message.delete({ where, });
  }
}
