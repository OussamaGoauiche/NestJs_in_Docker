import {IsNotEmpty} from 'class-validator';

import {ApiProperty} from "@nestjs/swagger";
export class CreateNotificationDto {
     @ApiProperty()
    @IsNotEmpty() titre_notif : string

     @ApiProperty()
    @IsNotEmpty() description_notif : string

     @ApiProperty()
    @IsNotEmpty() type_notif : string
}
