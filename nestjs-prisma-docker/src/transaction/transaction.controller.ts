import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags, ApiUnprocessableEntityResponse } from '@nestjs/swagger';

@Controller('transaction')
@ApiTags('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  @ApiOkResponse({ description: '  Transaction created successfully.'})
  @ApiUnprocessableEntityResponse({ description: 'Transaction  already exists.' })
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionService.create(createTransactionDto);
  }

  @Get()
  @ApiOkResponse({ description: 'Transaction Bien retourné.'})
  findAll() {
    return this.transactionService.findAll();
  }

  @Get(':id')
      @ApiNotFoundResponse({ description: 'Tansaction  not found.' })
  @ApiOkResponse({ description: 'Tranaction Bien retourné.'})
  findOne(@Param('id') id: string) {
    return this.transactionService.findOne(+id);
  }

  @Patch(':id')
     @ApiOkResponse({ description: 'Update successfully'})
  update(@Param('id') id: string, @Body() updateTransactionDto: UpdateTransactionDto) {
    return this.transactionService.update(+id, updateTransactionDto);
  }

  @Delete(':id')
   @ApiOkResponse({ description: 'Delete  successfully'})
  remove(@Param('id') id: string) {
    return this.transactionService.remove(+id);
  }
}
