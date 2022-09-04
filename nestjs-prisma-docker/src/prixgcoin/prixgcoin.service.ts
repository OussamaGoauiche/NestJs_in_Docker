import { Injectable, Logger } from '@nestjs/common';
import { CreatePrixgcoinDto } from './dto/create-prixgcoin.dto';
import { UpdatePrixgcoinDto } from './dto/update-prixgcoin.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrixgcoinService {
  private readonly logger = new Logger(PrixgcoinService.name)
  constructor( private readonly prisma: PrismaService) {}

  async create(createPrixgcoinDto: CreatePrixgcoinDto) {
    this.logger.log("creating ", createPrixgcoinDto);
    return await this.prisma.prixGcoin.create({
          data: {
          ...createPrixgcoinDto,
        },
        });
  }

  async findAll() {
    this.logger.log("return all prixgcoin");
    return await this.prisma.prixGcoin.findMany();
  }

  async findOne(id: number) {
     this.logger.log(`return prixGcoin id = ${id}`);
    return await this.prisma.prixGcoin.findUnique({
            where: {id_prixGcoin :id}
        }) ;
  }

  async update(id: number, updatePrixgcoinDto: UpdatePrixgcoinDto) {
    this.logger.log(`update prixGcoinDto = ${updatePrixgcoinDto}`);
    return await this.prisma.prixGcoin.update({
      where: { id_prixGcoin : id },
      data: updatePrixgcoinDto,
    });
  }

  async remove(id: number) {
    this.logger.log(`remove prixGcoinDto id = ${id}`);
    return await this.prisma.prixGcoin.delete({
      where: { id_prixGcoin : id },
    });
  }
}
