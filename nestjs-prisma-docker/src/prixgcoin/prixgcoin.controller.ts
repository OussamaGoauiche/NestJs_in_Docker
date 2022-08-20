import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrixgcoinService } from './prixgcoin.service';
import { CreatePrixgcoinDto } from './dto/create-prixgcoin.dto';
import { UpdatePrixgcoinDto } from './dto/update-prixgcoin.dto';

@Controller('prixgcoin')
export class PrixgcoinController {
  constructor(private readonly prixgcoinService: PrixgcoinService) {}

  @Post()
  create(@Body() createPrixgcoinDto: CreatePrixgcoinDto) {
    return this.prixgcoinService.create(createPrixgcoinDto);
  }

  @Get()
  findAll() {
    return this.prixgcoinService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prixgcoinService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrixgcoinDto: UpdatePrixgcoinDto) {
    return this.prixgcoinService.update(+id, updatePrixgcoinDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prixgcoinService.remove(+id);
  }
}
