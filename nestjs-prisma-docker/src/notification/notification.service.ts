import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { PrismaService } from '../prisma.service';


@Injectable()
export class NotificationService {

  constructor( private readonly prisma: PrismaService) {}


  async create(createNotificationDto: CreateNotificationDto) {
    return await this.prisma.notification.create({
          data: {
          ...createNotificationDto,
        },
        });
  }

  async findAll() {
    return await this.prisma.notification.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.notification.findUnique({
            where: {id_notif :id}
        });
  }

  async update(id: number, updateNotificationDto: UpdateNotificationDto) {
    return await this.prisma.notification.update({
      where: { id_notif : id },
      data: updateNotificationDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.notification.delete({
      where: { id_notif : id },
    });
  }
}
