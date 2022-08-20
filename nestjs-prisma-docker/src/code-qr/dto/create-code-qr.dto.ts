import {IsNotEmpty} from 'class-validator';

import {ApiProperty} from "@nestjs/swagger";
export class CreateCodeQrDto {

    @ApiProperty()
    @IsNotEmpty() Url_Qr: string;

    @ApiProperty()
    @IsNotEmpty() nomber_coin : number;

    @ApiProperty()
    @IsNotEmpty() ScanCounter : number;

    @ApiProperty()
    @IsNotEmpty() typecodeQr :string;

    @ApiProperty()
    @IsNotEmpty() compteId_compte: number;

    @ApiProperty()
    @IsNotEmpty() historiqueId_historique: number;
}
