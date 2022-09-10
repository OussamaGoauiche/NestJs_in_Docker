import { Injectable, Logger } from '@nestjs/common';
import { CreateCompteDto } from './dto/create-compte.dto';
import { UpdateCompteDto } from './dto/update-compte.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CompteService {
  private readonly logger = new Logger(CompteService.name)
  constructor( private readonly prisma: PrismaService) {}

  async create(createCompteDto: CreateCompteDto) {
    this.logger.log('create compte', createCompteDto);
    return await this.prisma.compte.create({
          data: {
          ...createCompteDto,
        },
        });
  }

  async findAll() {
    this.logger.log('find all');
    return  await this.prisma.compte.findMany();
  }

  async findOne(id: number) {
    this.logger.log(`return compte id=${id}`);
    return await this.prisma.compte.findUnique({
            where: {id_compte :id}
        });
  }

  async update(id: number, updateCompteDto: UpdateCompteDto) {
     this.logger.log(`update compte id=${id}`);
     return await this.prisma.compte.update({
      where: { id_compte : id },
      data: updateCompteDto,
    });
  }

  async remove(id: number) {
    this.logger.log(`remove compte id=${id}`);
   return await this.prisma.compte.delete({
      where: { id_compte : id },
    });
  }
}
