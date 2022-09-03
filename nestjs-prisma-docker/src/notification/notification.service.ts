import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { PrismaService } from '../prisma.service';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class NotificationService {

  constructor( private readonly prisma: PrismaService) {}


   @Cron('0 0 0 0 1 *',{
    name: 'notifications'
  })
  async notificationGlobal(createNotificationDto: CreateNotificationDto) {
    return await this.prisma.notification.create({
          data: {
          titre_notif:"Xcard",
          description_notif:"Amusez-vous",
          type_notif:"Fidelité"
        },
        });
  }


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
