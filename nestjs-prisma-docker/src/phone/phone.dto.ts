import {IsNotEmpty} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";
export class CreatePhoneDto {
    @ApiProperty()
    @IsNotEmpty() message : string;

    @ApiProperty()
    @IsNotEmpty() distination : string;
}
