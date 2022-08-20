import { Injectable } from '@nestjs/common';
import { CreateCodeQrDto } from './dto/create-code-qr.dto';
import { UpdateCodeQrDto } from './dto/update-code-qr.dto';
import { PrismaService } from '../prisma.service';



@Injectable()
export class CodeQrService {

    constructor( private readonly prisma: PrismaService) {}

  async create(createCodeQrDto: CreateCodeQrDto) {
    return await this.prisma.codeQr.create({
          data: {
          ...createCodeQrDto,
        },
        });
  }

  async findAll() {
    return await this.prisma.codeQr.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.codeQr.findUnique({
            where: {id_codeqr :id}
        });
  }

  async update(id: number, updateCodeQrDto: UpdateCodeQrDto) {
    return await this.prisma.codeQr.update({
      where: { id_codeqr : id },
      data: updateCodeQrDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.codeQr.delete({
      where: { id_codeqr : id },
    });
  }
}
