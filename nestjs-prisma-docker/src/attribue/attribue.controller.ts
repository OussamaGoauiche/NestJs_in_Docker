import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AttribueService } from './attribue.service';
import { CreateAttribueDto } from './dto/create-attribue.dto';
import { UpdateAttribueDto } from './dto/update-attribue.dto';

@Controller('attribue')
export class AttribueController {
  constructor(private readonly attribueService: AttribueService) {}

  @Post()
  create(@Body() createAttribueDto: CreateAttribueDto) {
    return this.attribueService.create(createAttribueDto);
  }

  @Get()
  findAll() {
    return this.attribueService.findAll();
  }

  @Get(':id/:id1')
  findOne(@Param('id') id: number, id1: number) {
    return this.attribueService.findOne(id,id1);
  }

  @Patch(':id/id1')
  update(@Param('id') id: number, id1: number, @Body() updateAttribueDto: UpdateAttribueDto) {
    return this.attribueService.update(id,id1,updateAttribueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number, id1: number) {
    return this.attribueService.remove(id,id1);
  }
}
