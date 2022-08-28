import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ClassSerializerInterceptor, UseInterceptors } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Role } from '../enums/role.enums';
import { Roles } from '../roles/decorator';
import { AttribueService } from './attribue.service';
import { CreateAttribueDto } from './dto/create-attribue.dto';
import { UpdateAttribueDto } from './dto/update-attribue.dto';

@Controller('attribue')
@ApiTags('attribue')
export class AttribueController {
  constructor(private readonly attribueService: AttribueService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOkResponse({ description: 'attribue created successfully.'})
  @ApiNotFoundResponse({ description: 'attribue not created' })
  create(@Body() createAttribueDto: CreateAttribueDto) {
    return this.attribueService.create(createAttribueDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(ClassSerializerInterceptor)
  @Roles(Role.User)
  @ApiOkResponse({ description: ' attribue retrieved successfully.'})
  @ApiNotFoundResponse({ description: 'attribue not retrieved successfully' })
  findAll() {
    return this.attribueService.findAll();
  }

  @Get(':id/:id1')
  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(ClassSerializerInterceptor)
  @Roles(Role.Admin)
  @ApiOkResponse({ description: ' attribue retrieved successfully.'})
  @ApiNotFoundResponse({ description: 'attribue not retrieved successfully' })
  findOne(@Param('id') id: number, id1: number) {
    return this.attribueService.findOne(id,id1);
  }

  @Patch(':id/id1')
  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(ClassSerializerInterceptor)
  @Roles(Role.Admin)
  @ApiOkResponse({ description: 'Update successfully'})
  update(@Param('id') id: number, id1: number, @Body() updateAttribueDto: UpdateAttribueDto) {
    return this.attribueService.update(id,id1,updateAttribueDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(ClassSerializerInterceptor)
  @Roles(Role.Admin)
  @ApiOkResponse({ description: ' Delete successfully'})
  remove(@Param('id') id: number, id1: number) {
    return this.attribueService.remove(id,id1);
  }
}
