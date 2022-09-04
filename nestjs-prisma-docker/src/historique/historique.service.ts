import { Injectable, Logger } from '@nestjs/common';
import { CreateHistoriqueDto } from './dto/create-historique.dto';
import { UpdateHistoriqueDto } from './dto/update-historique.dto';
import {PrismaService} from "../prisma.service"

@Injectable()
export class HistoriqueService {
  private readonly logger = new Logger(HistoriqueService.name)
  constructor(
        private prisma: PrismaService,
    ) {
    }

  async create(createHistoriqueDto: CreateHistoriqueDto) {
    this.logger.log("historique created");
    return await this.prisma.historiqueScan.create(
         {
          data: {
          ...createHistoriqueDto,
        },
        }
    );
  }

  async findAll() {
    this.logger.log('return all');
    return await this.prisma.historiqueScan.findMany();
  }

  async findOne(id: number) {
    this.logger.log(`return historiqueScan id= ${id}`)
    return await this.prisma.historiqueScan.findUnique(
      {
            where: {id_historiqueScan : id },
        }
    );
  }

  async update(id: number, updateHistoriqueDto: UpdateHistoriqueDto) {
    this.logger.log(`update historiqueScan id = ${id}`)
    return await this.prisma.historiqueScan.update(
      {
      where: { id_historiqueScan : id },
      data: updateHistoriqueDto,
    }
    );
  }

  async remove(id: number) {
    this.logger.log(`remove historiqueScan id = ${id}`)
    return await this.prisma.historiqueScan.delete({
      where: { id_historiqueScan : id },
    }
    );
  }
}
