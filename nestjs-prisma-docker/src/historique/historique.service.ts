import { Injectable } from '@nestjs/common';
import { CreateHistoriqueDto } from './dto/create-historique.dto';
import { UpdateHistoriqueDto } from './dto/update-historique.dto';
import {PrismaService} from "../prisma.service"

@Injectable()
export class HistoriqueService {

  constructor(
        private prisma: PrismaService,
    ) {
    }

  async create(createHistoriqueDto: CreateHistoriqueDto) {
    return await this.prisma.historiqueScan.create(
         {
          data: {
          ...createHistoriqueDto,
        },
        }
    );
  }

  async findAll() {
    return await this.prisma.historiqueScan.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.historiqueScan.findUnique(
      {
            where: {id_historiqueScan : id },
        }
    );
  }

  async update(id: number, updateHistoriqueDto: UpdateHistoriqueDto) {
    return await this.prisma.historiqueScan.update(
      {
      where: { id_historiqueScan : id },
      data: updateHistoriqueDto,
    }
    );
  }

  async remove(id: number) {
    return await this.prisma.historiqueScan.delete({
      where: { id_historiqueScan : id },
    }
    );
  }
}
