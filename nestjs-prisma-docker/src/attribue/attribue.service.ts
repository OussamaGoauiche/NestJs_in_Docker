import { Attribue } from './entities/attribue.entity';
import { Injectable } from '@nestjs/common';
import { CreateAttribueDto } from './dto/create-attribue.dto';
import { UpdateAttribueDto } from './dto/update-attribue.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AttribueService {

  constructor( private readonly prisma: PrismaService) {}

  async create(createAttribueDto: CreateAttribueDto) {
    return await this.prisma.attribue.create({
          data: {
          ...createAttribueDto,
        },
        });
  }

  async findAll() {
    return await this.prisma.attribue.findMany();
  }

  async findOne(id_user: number, id_notif :number) {
    return await this.prisma.attribue.findMany({
            where: {userid :id_user,
                    notif_id : id_notif
            }
        });
  }

  async update(id_user: number,id_notif : number, updateAttribueDto: UpdateAttribueDto) {
    return await this.prisma.attribue.updateMany ({
      where: {
        userid :id_user,
        notif_id : id_notif
       },
      data: updateAttribueDto,
    });
  }

  async remove(id_user: number,id_notif : number) {
    return await this.prisma.attribue.deleteMany({
      where: { 
        userid :id_user,
        notif_id : id_notif },
    });
    }
}
