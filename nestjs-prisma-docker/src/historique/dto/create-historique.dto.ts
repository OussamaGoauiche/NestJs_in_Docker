import {IsNotEmpty} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";
export class CreateHistoriqueDto {
    @ApiProperty()
    @IsNotEmpty() info_scan : string;

    @ApiProperty()
    @IsNotEmpty() id_compte : number;

    @ApiProperty()
    @IsNotEmpty() id_codeqr : number;

    @ApiProperty()
    @IsNotEmpty() compteId_compte : number;


}
