import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse, ApiSecurity, ApiTags, ApiUnprocessableEntityResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Role } from '../enums/role.enums';
import { Roles } from '../roles/decorator';
import { CompteService } from './compte.service';
import { CreateCompteDto } from './dto/create-compte.dto';
import { UpdateCompteDto } from './dto/update-compte.dto';

@Controller('compte')
@ApiTags('compte')
export class CompteController {
  constructor(private readonly compteService: CompteService) {}

  @ApiOkResponse({ description: 'compte created successfully.'})
  @ApiUnprocessableEntityResponse({ description: ' compte  already exists.' })
  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(ClassSerializerInterceptor)
  create(@Body() createCompteDto: CreateCompteDto) {
    return this.compteService.create(createCompteDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOkResponse({ description: 'Compte Bien retourné.'})
  findAll() {
    return this.compteService.findAll();
  }

   @Get(':id')
  /*@UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiNotFoundResponse({ description: 'compte  not found.' })
  @ApiOkResponse({ description: 'compte Bien retourné.'})*/
  findOne(@Param('id') id: string) {
    return this.compteService.findOne(+id);
  }


  /*@UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(ClassSerializerInterceptor)
  @Roles(Role.Admin)
  @ApiOkResponse({ description: 'Update successfully'})*/
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompteDto: UpdateCompteDto) {
    return this.compteService.update(+id, updateCompteDto);
  }

   @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOkResponse({ description: 'Delete  successfully'})
  remove(@Param('id') id: string) {
    return this.compteService.remove(+id);
  }
}
