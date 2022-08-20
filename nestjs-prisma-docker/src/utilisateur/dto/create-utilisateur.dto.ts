import {IsNotEmpty} from 'class-validator';

import {ApiProperty} from "@nestjs/swagger";
export class CreateUtilisateurDto {

    @ApiProperty()
    @IsNotEmpty() nom_utilisateur : string

    @ApiProperty()
    @IsNotEmpty() telephone_utilisateur : number 

    @ApiProperty()
    @IsNotEmpty()  email_utilisateur : string 

    @ApiProperty()
    @IsNotEmpty() password_utilisateur : string

}
