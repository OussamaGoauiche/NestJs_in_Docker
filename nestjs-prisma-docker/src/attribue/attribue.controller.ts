import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AttribueService } from './attribue.service';
import { CreateAttribueDto } from './dto/create-attribue.dto';
import { UpdateAttribueDto } from './dto/update-attribue.dto';

@Controller('attribue')
@ApiTags('attribue')
export class AttribueController {
  constructor(private readonly attribueService: AttribueService) {}

  @Post()
  @ApiOkResponse({ description: 'attribue created successfully.'})
  @ApiNotFoundResponse({ description: 'attribue not created' })
  create(@Body() createAttribueDto: CreateAttribueDto) {
    return this.attribueService.create(createAttribueDto);
  }

  @Get()
  @ApiOkResponse({ description: ' attribue retrieved successfully.'})
  @ApiNotFoundResponse({ description: 'attribue not retrieved successfully' })
  findAll() {
    return this.attribueService.findAll();
  }

  @Get(':id/:id1')
  @ApiOkResponse({ description: ' attribue retrieved successfully.'})
  @ApiNotFoundResponse({ description: 'attribue not retrieved successfully' })
  findOne(@Param('id') id: number, id1: number) {
    return this.attribueService.findOne(id,id1);
  }

  @Patch(':id/id1')
  @ApiOkResponse({ description: 'Update successfully'})
  update(@Param('id') id: number, id1: number, @Body() updateAttribueDto: UpdateAttribueDto) {
    return this.attribueService.update(id,id1,updateAttribueDto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: ' Delete successfully'})
  remove(@Param('id') id: number, id1: number) {
    return this.attribueService.remove(id,id1);
  }
}
