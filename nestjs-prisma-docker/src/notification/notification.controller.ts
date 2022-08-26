import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags, ApiUnprocessableEntityResponse } from '@nestjs/swagger';

@Controller('notification')
@ApiTags('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  @ApiOkResponse({ description: '  Notification created successfully.'})
  @ApiUnprocessableEntityResponse({ description: 'Notification  already exists.' })
  create(@Body() createNotificationDto: CreateNotificationDto) {
    return this.notificationService.create(createNotificationDto);
  }

  @Get()
    @ApiOkResponse({ description: 'Notification Bien retourné.'})
  findAll() {
    return this.notificationService.findAll();
  }

  @Get(':id')
  @ApiNotFoundResponse({ description: 'Notification  not found.' })
  @ApiOkResponse({ description: 'Notification Bien retourné.'})
  findOne(@Param('id') id: string) {
    return this.notificationService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ description: 'Update successfully'})
  update(@Param('id') id: string, @Body() updateNotificationDto: UpdateNotificationDto) {
    return this.notificationService.update(+id, updateNotificationDto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Delete  successfully'})
  remove(@Param('id') id: string) {
    return this.notificationService.remove(+id);
  }
}
