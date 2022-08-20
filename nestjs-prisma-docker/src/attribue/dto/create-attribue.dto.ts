import {IsNotEmpty} from 'class-validator';

import {ApiProperty} from "@nestjs/swagger";
export class CreateAttribueDto {

     @ApiProperty()
    @IsNotEmpty() notif_id : number;

     @ApiProperty()
    @IsNotEmpty()  userid  : number;

}
