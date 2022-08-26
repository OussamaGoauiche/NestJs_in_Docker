import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrixgcoinService } from './prixgcoin.service';
import { CreatePrixgcoinDto } from './dto/create-prixgcoin.dto';
import { UpdatePrixgcoinDto } from './dto/update-prixgcoin.dto';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags, ApiUnprocessableEntityResponse } from '@nestjs/swagger';

@Controller('prixgcoin')
@ApiTags('prixgcoin')
export class PrixgcoinController {
  constructor(private readonly prixgcoinService: PrixgcoinService) {}

  @Post()
   @ApiOkResponse({ description: '  Prixgcoin created successfully.'})
  @ApiUnprocessableEntityResponse({ description: 'Prixgcoin  already exists.' })
  create(@Body() createPrixgcoinDto: CreatePrixgcoinDto) {
    return this.prixgcoinService.create(createPrixgcoinDto);
  }

  @Get()
  @ApiOkResponse({ description: 'Prixgcoin Bien retourné.'})
  findAll() {
    return this.prixgcoinService.findAll();
  }

  @Get(':id')
    @ApiNotFoundResponse({ description: 'Prixgcoin  not found.' })
  @ApiOkResponse({ description: 'Prixgcoin Bien retourné.'})
  findOne(@Param('id') id: string) {
    return this.prixgcoinService.findOne(+id);
  }

  @Patch(':id')
    @ApiOkResponse({ description: 'Update successfully'})
  update(@Param('id') id: string, @Body() updatePrixgcoinDto: UpdatePrixgcoinDto) {
    return this.prixgcoinService.update(+id, updatePrixgcoinDto);
  }

  @Delete(':id')
   @ApiOkResponse({ description: 'Delete  successfully'})
  remove(@Param('id') id: string) {
    return this.prixgcoinService.remove(+id);
  }
}
