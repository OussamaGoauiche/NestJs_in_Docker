
import { Injectable, Logger } from '@nestjs/common';
import { CreateAttribueDto } from './dto/create-attribue.dto';
import { UpdateAttribueDto } from './dto/update-attribue.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AttribueService {

  private readonly logger = new Logger(AttribueService.name)
  constructor( private readonly prisma: PrismaService) {}

  async create(createAttribueDto: CreateAttribueDto) {
    this.logger.log('created Attribue');
    return await this.prisma.attribue.create({
          data: {
          ...createAttribueDto,
        },
        });
  }

  async findAll() {
    this.logger.log('return all Attribues');
    return await this.prisma.attribue.findMany();
  }

  async findOne(id_user: number, id_notif :number) {
    this.logger.log(`return attribue id = ${id_user}`);
    return await this.prisma.attribue.findMany({
            where: {userid :id_user,
                    notif_id : id_notif
            }
        });
  }

  async update(id_user: number,id_notif : number, updateAttribueDto: UpdateAttribueDto) {
    this.logger.log(`update attribue id = ${id_user}`);
    return await this.prisma.attribue.updateMany ({
      where: {
        userid :id_user,
        notif_id : id_notif
       },
      data: updateAttribueDto,
    });
  }

  async remove(id_user: number,id_notif : number) {
    this.logger.log(`remove attribue id = ${id_user}`);
    return await this.prisma.attribue.deleteMany({
      where: { 
        userid :id_user,
        notif_id : id_notif },
    });
    }
}
