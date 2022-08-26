import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HistoriqueService } from './historique.service';
import { CreateHistoriqueDto } from './dto/create-historique.dto';
import { UpdateHistoriqueDto } from './dto/update-historique.dto';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags, ApiUnprocessableEntityResponse } from '@nestjs/swagger';

@Controller('historique')
@ApiTags('historique')
export class HistoriqueController {
  constructor(private readonly historiqueService: HistoriqueService) {}

  @Post()
  @ApiOkResponse({ description: '  Historique created successfully.'})
  @ApiUnprocessableEntityResponse({ description: 'Historique  already exists.' })
  create(@Body() createHistoriqueDto: CreateHistoriqueDto) {
    return this.historiqueService.create(createHistoriqueDto);
  }

  @Get()
  @ApiOkResponse({ description: 'Historique Bien retourné.'})
  findAll() {
    return this.historiqueService.findAll();
  }

  @Get(':id')
  @ApiNotFoundResponse({ description: 'Historique  not found.' })
  @ApiOkResponse({ description: 'Historique Bien retourné.'})
  findOne(@Param('id') id: string) {
    return this.historiqueService.findOne(+id);
  }

  @Patch(':id')
   @ApiOkResponse({ description: 'Update successfully'})
  update(@Param('id') id: string, @Body() updateHistoriqueDto: UpdateHistoriqueDto) {
    return this.historiqueService.update(+id, updateHistoriqueDto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Delete  successfully'})
  remove(@Param('id') id: string) {
    return this.historiqueService.remove(+id);
  }
}
