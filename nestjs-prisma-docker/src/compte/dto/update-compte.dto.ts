import { PartialType } from '@nestjs/swagger';
import { CreateCompteDto } from './create-compte.dto';
import {IsNotEmpty} from 'class-validator';

import {ApiProperty} from "@nestjs/swagger";

export class UpdateCompteDto extends PartialType(CreateCompteDto) {

    @ApiProperty()
    @IsNotEmpty() historiqueTransaction : number;

    @ApiProperty() userid : number;
}
