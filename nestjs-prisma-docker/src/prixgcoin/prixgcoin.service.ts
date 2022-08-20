import { Injectable } from '@nestjs/common';
import { CreatePrixgcoinDto } from './dto/create-prixgcoin.dto';
import { UpdatePrixgcoinDto } from './dto/update-prixgcoin.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrixgcoinService {

  constructor( private readonly prisma: PrismaService) {}

  async create(createPrixgcoinDto: CreatePrixgcoinDto) {
    return await this.prisma.prixGcoin.create({
          data: {
          ...createPrixgcoinDto,
        },
        });
  }

  async findAll() {
    return await this.prisma.prixGcoin.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.prixGcoin.findUnique({
            where: {id_prixGcoin :id}
        }) ;
  }

  async update(id: number, updatePrixgcoinDto: UpdatePrixgcoinDto) {
    return await this.prisma.prixGcoin.update({
      where: { id_prixGcoin : id },
      data: updatePrixgcoinDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.prixGcoin.delete({
      where: { id_prixGcoin : id },
    });
  }
}
