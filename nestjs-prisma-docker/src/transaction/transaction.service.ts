import { Injectable, Logger } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TransactionService {
  private readonly logger = new Logger(TransactionService.name)
  constructor( private readonly prisma: PrismaService) {}

  async create(createTransactionDto: CreateTransactionDto) {
    this.logger.log("transaction created", createTransactionDto);
    return  await this.prisma.transaction.create({
          data: {
          ...createTransactionDto,
        },
        });
  }

  async findAll() {
    this.logger.log("transaction return all");
    return await this.prisma.transaction.findMany();
  }

  async findOne(id: number) {
    this.logger.log(`return transaction id = ${id}`)
    return await this.prisma.transaction.findUnique({
            where: {id_transac :id}
        });
  }

  async update(id: number, updateTransactionDto: UpdateTransactionDto) {
    this.logger.log(`transaction updating id = ${id}`);
    return await this.prisma.transaction.update({
      where: { id_transac : id },
      data: updateTransactionDto,
    });
  }

  async remove(id: number) {
    this.logger.log(`transaction removing id = ${id}`);
    return await this.prisma.transaction.delete({
      where: { id_transac : id },
    });  }
}
