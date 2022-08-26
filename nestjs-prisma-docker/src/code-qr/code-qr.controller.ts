import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags, ApiUnprocessableEntityResponse } from '@nestjs/swagger';
import { CodeQrService } from './code-qr.service';
import { CreateCodeQrDto } from './dto/create-code-qr.dto';
import { UpdateCodeQrDto } from './dto/update-code-qr.dto';

@Controller('code-qr')
@ApiTags('code-qr')
export class CodeQrController {
  constructor(private readonly codeQrService: CodeQrService) {}

  @ApiOkResponse({ description: ' Code Qr created successfully.'})
  @ApiUnprocessableEntityResponse({ description: ' code-qr  already exists.' })
  @Post()
  create(@Body() createCodeQrDto: CreateCodeQrDto) {
    return this.codeQrService.create(createCodeQrDto);
  }

  @Get()
  @ApiOkResponse({ description: 'Codes Qr Bien retourné.'})
  findAll() {
    return this.codeQrService.findAll();
  }

  @Get(':id')
  @ApiNotFoundResponse({ description: 'Code Qr  not found.' })
  @ApiOkResponse({ description: 'Code Qr Bien retourné.'})
  findOne(@Param('id') id: string) {
    return this.codeQrService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ description: 'Update successfully'})
  update(@Param('id') id: string, @Body() updateCodeQrDto: UpdateCodeQrDto) {
    return this.codeQrService.update(+id, updateCodeQrDto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Delete  successfully'})
  remove(@Param('id') id: string) {
    return this.codeQrService.remove(+id);
  }
}
