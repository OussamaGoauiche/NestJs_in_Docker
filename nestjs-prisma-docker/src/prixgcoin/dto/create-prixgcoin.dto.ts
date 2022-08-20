import {IsNotEmpty} from 'class-validator';

import {ApiProperty} from "@nestjs/swagger";

export class CreatePrixgcoinDto {
    @ApiProperty()
    @IsNotEmpty() prix_Gcoin: number;
    @ApiProperty()
    @IsNotEmpty() detail_prixGcoin : string;
}
