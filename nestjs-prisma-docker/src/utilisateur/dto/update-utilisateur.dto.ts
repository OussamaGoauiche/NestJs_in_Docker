import { PartialType } from '@nestjs/swagger';
import { CreateUtilisateurDto } from './create-utilisateur.dto';
import {IsNotEmpty} from 'class-validator';

import {ApiProperty} from "@nestjs/swagger";

export class UpdateUtilisateurDto extends PartialType(CreateUtilisateurDto) {
     @ApiProperty()
    @IsNotEmpty() nom_utilisateur : string

    @ApiProperty()
    @IsNotEmpty() telephone_utilisateur : number 

    @ApiProperty()
    @IsNotEmpty()  email_utilisateur : string 

    @ApiProperty()
    @IsNotEmpty() password_utilisateur : string
}
