import {IsNotEmpty} from 'class-validator';

import {ApiProperty} from "@nestjs/swagger";
export class CreateCompteDto {
    @ApiProperty()
    @IsNotEmpty() nom_compte: string;

    @ApiProperty()
    @IsNotEmpty() historiqueTransaction : number;

    @ApiProperty()
    @IsNotEmpty() userid : number;
}
