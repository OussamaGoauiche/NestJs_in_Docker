import { PartialType } from '@nestjs/swagger';
import { CreatePrixgcoinDto } from './create-prixgcoin.dto';
import {IsNotEmpty} from 'class-validator';

import {ApiProperty} from "@nestjs/swagger";


export class UpdatePrixgcoinDto extends PartialType(CreatePrixgcoinDto) {
     @ApiProperty()
    @IsNotEmpty() prix_Gcoin: number;
    @ApiProperty()
    @IsNotEmpty() detail_prixGcoin : string;
}
