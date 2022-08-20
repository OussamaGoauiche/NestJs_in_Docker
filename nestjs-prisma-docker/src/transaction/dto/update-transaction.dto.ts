import { PartialType,ApiProperty } from '@nestjs/swagger';
import { CreateTransactionDto } from './create-transaction.dto';
import {IsNotEmpty} from 'class-validator';

export class UpdateTransactionDto extends PartialType(CreateTransactionDto) {
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
