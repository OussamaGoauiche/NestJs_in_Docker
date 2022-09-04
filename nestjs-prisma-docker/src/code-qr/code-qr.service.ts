import { Injectable, Logger } from '@nestjs/common';
import { CreateCodeQrDto } from './dto/create-code-qr.dto';
import { UpdateCodeQrDto } from './dto/update-code-qr.dto';
import { PrismaService } from '../prisma.service';



@Injectable()
export class CodeQrService {
    private readonly logger = new Logger(CodeQrService.name)
    constructor( private readonly prisma: PrismaService) {}

  async create(createCodeQrDto: CreateCodeQrDto) {
    this.logger.log('create code-qr', createCodeQrDto);
    return await this.prisma.codeQr.create({
          data: {
          ...createCodeQrDto,
        },
        });
  }

  async findAll() {
    this.logger.log('find all');
    return await this.prisma.codeQr.findMany();
  }

  async findOne(id: number) {
    this.logger.log(`return code qr id=${id}`);
    return await this.prisma.codeQr.findUnique({
            where: {id_codeqr :id}
        });
  }

  async update(id: number, updateCodeQrDto: UpdateCodeQrDto) {
    this.logger.log(`update code qr id=${id}`);
    return await this.prisma.codeQr.update({
      where: { id_codeqr : id },
      data: updateCodeQrDto,
    });
  }

  async remove(id: number) {
    this.logger.log(`remove code qr id=${id}`);
    return await this.prisma.codeQr.delete({
      where: { id_codeqr : id },
    });
  }
}
