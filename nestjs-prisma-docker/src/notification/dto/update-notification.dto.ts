import { PartialType } from '@nestjs/swagger';
import { CreateNotificationDto } from './create-notification.dto';
import {IsNotEmpty} from 'class-validator';

import {ApiProperty} from "@nestjs/swagger";

export class UpdateNotificationDto extends PartialType(CreateNotificationDto) {
    @ApiProperty()
    @IsNotEmpty() titre_notif : string

     @ApiProperty()
    @IsNotEmpty() description_notif : string

     @ApiProperty()
    @IsNotEmpty() type_notif : string

}
