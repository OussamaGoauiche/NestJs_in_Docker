import { PartialType } from '@nestjs/swagger';
import {IsNotEmpty} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";
import { CreateHistoriqueDto } from './create-historique.dto';

export class UpdateHistoriqueDto extends PartialType(CreateHistoriqueDto) {
   @ApiProperty()
    @IsNotEmpty() info_scan : string;

    @ApiProperty()
    @IsNotEmpty() id_compte : number;

    @ApiProperty()
    @IsNotEmpty() id_codeqr : number;

    @ApiProperty()
    @IsNotEmpty() compteId_compte : number;
}
