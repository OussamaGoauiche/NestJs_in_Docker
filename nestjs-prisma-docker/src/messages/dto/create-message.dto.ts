import {IsNotEmpty} from 'class-validator';

import {ApiProperty} from "@nestjs/swagger";


export class CreateMessageDto {

     @ApiProperty()
    @IsNotEmpty() description_message: string;

    @ApiProperty()
    @IsNotEmpty() titre_message: string;

    @ApiProperty()
    @IsNotEmpty()  utilisateurId_utilisateur: number;
   
   
}
