import { PartialType } from '@nestjs/swagger';
import { CreateAttribueDto } from './create-attribue.dto';
import {IsNotEmpty} from 'class-validator';

import {ApiProperty} from "@nestjs/swagger";
export class UpdateAttribueDto extends PartialType(CreateAttribueDto) {

    @ApiProperty()
    @IsNotEmpty() notif_id : number;

     @ApiProperty()
    @IsNotEmpty()  userid  : number;

}
