import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { PrixgcoinService } from './prixgcoin.service';
import { CreatePrixgcoinDto } from './dto/create-prixgcoin.dto';
import { UpdatePrixgcoinDto } from './dto/update-prixgcoin.dto';
import { ApiNotFoundResponse, ApiOkResponse, ApiSecurity, ApiTags, ApiUnprocessableEntityResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../roles/decorator';
import { Role } from '../enums/role.enums';


@Controller('prixgcoin')
@ApiTags('prixgcoin')
export class PrixgcoinController {
  constructor(private readonly prixgcoinService: PrixgcoinService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(ClassSerializerInterceptor)
  @Roles(Role.Admin)
  @ApiOkResponse({ description: '  Prixgcoin created successfully.'})
  @ApiUnprocessableEntityResponse({ description: 'Prixgcoin  already exists.' })
  create(@Body() createPrixgcoinDto: CreatePrixgcoinDto) {
    return this.prixgcoinService.create(createPrixgcoinDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(ClassSerializerInterceptor)
  @Roles(Role.Admin)
  @ApiOkResponse({ description: 'Prixgcoin Bien retourné.'})
  findAll() {
    return this.prixgcoinService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(ClassSerializerInterceptor)
  @Roles(Role.Admin)
  @ApiNotFoundResponse({ description: 'Prixgcoin  not found.' })
  @ApiOkResponse({ description: 'Prixgcoin Bien retourné.'})
  findOne(@Param('id') id: string) {
    return this.prixgcoinService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(ClassSerializerInterceptor)
  @Roles(Role.Admin)
  @ApiOkResponse({ description: 'Update successfully'})
  update(@Param('id') id: string, @Body() updatePrixgcoinDto: UpdatePrixgcoinDto) {
    return this.prixgcoinService.update(+id, updatePrixgcoinDto);
  }

  @Delete(':id')
  /*@UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(ClassSerializerInterceptor)
  @Roles(Role.Admin)
  @ApiOkResponse({ description: 'Delete  successfully'})*/
  remove(@Param('id') id: string) {
    return this.prixgcoinService.remove(+id);
  }
}
