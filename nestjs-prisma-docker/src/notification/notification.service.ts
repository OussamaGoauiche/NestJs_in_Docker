import { Injectable, Logger } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { PrismaService } from '../prisma.service';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name)
  constructor( private readonly prisma: PrismaService,) {}


   @Cron('0 0 0 2 * *',{
    name: 'notifications'
  })
  async notificationGlobal() {
    
    this.logger.log(`Notification Global Bien Fait`);
    return await this.prisma.notification.create({
          data: {
          titre_notif:"Xcard",
          description_notif:"Amusez-vous",
          type_notif:"Fidelité"
        },
        });
  }





  async create(createNotificationDto: CreateNotificationDto) {
    this.logger.log(`created notification`);
    return await this.prisma.notification.create({
          data: {
          ...createNotificationDto,
        },
        });
  }

  async findAll() {
    this.logger.log(`return all notifications`);
    return await this.prisma.notification.findMany();
  }

  async findOne(id: number) {
    this.logger.log(`return notification id = ${id}`);
    return await this.prisma.notification.findUnique({
            where: {id_notif :id}
        });
  }

  async update(id: number, updateNotificationDto: UpdateNotificationDto) {
    this.logger.log(`notification id = ${id} successfully updated updateNotificationDto=`+updateNotificationDto);
    return await this.prisma.notification.update({
      where: { id_notif : id },
      data: updateNotificationDto,
    });
  }

  async remove(id: number) {
    this.logger.log(`remove notification id = ${id} successfully removed`);
    return await this.prisma.notification.delete({
      where: { id_notif : id },
    });
  }
}
