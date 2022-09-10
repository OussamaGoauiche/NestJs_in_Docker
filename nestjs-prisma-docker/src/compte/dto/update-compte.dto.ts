import { PartialType } from '@nestjs/swagger';
import { CreateCompteDto } from './create-compte.dto';
import {IsNotEmpty} from 'class-validator';

import {ApiProperty} from "@nestjs/swagger";

export class UpdateCompteDto extends PartialType(CreateCompteDto) {
    @ApiProperty()
    @IsNotEmpty() nom_compte: string;

    @ApiProperty()
    @IsNotEmpty() historiqueTransaction : number;

    @ApiProperty()
    @IsNotEmpty() userid : number;
}
