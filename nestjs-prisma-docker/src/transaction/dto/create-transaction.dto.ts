import {IsNotEmpty} from 'class-validator';

import {ApiProperty} from "@nestjs/swagger";
export class CreateTransactionDto {
      @ApiProperty()
      @IsNotEmpty() montant_transac : number
      
      @ApiProperty()
      @IsNotEmpty() commission :number

      @ApiProperty()
      @IsNotEmpty() compteId_compte :number

      @ApiProperty()
      @IsNotEmpty() id_receveur : number

      @ApiProperty()
      @IsNotEmpty() id_emetteur : number
}
