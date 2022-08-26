import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
import { ApiNotFoundResponse, ApiOkResponse, ApiUnprocessableEntityResponse } from '@nestjs/swagger';

@Controller('utilisateur')
export class UtilisateurController {
  constructor(private readonly utilisateurService: UtilisateurService) {}

  @Post()
  @ApiOkResponse({ description: '  User created successfully.'})
  @ApiUnprocessableEntityResponse({ description: 'user  already exists.' })
  create(@Body() createUtilisateurDto: CreateUtilisateurDto) {
    return this.utilisateurService.create(createUtilisateurDto);
  }

  @Get()
   @ApiOkResponse({ description: 'User Bien retourné.'})
  findAll() {
    return this.utilisateurService.findAll();
  }

  @Get(':id')
      @ApiNotFoundResponse({ description: 'user  not found.' })
  @ApiOkResponse({ description: 'user Bien retourné.'})
  findOne(@Param('id') id: string) {
    return this.utilisateurService.findOne(+id);
  }

  @Patch(':id')
   @ApiOkResponse({ description: 'Update successfully'})
  update(@Param('id') id: string, @Body() updateUtilisateurDto: UpdateUtilisateurDto) {
    return this.utilisateurService.update(+id, updateUtilisateurDto);
  }

  @Delete(':id')
   @ApiOkResponse({ description: 'Delete  successfully'})
  remove(@Param('id') id: string) {
    return this.utilisateurService.remove(+id);
  }
}
