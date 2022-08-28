import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse, ApiSecurity, ApiTags, ApiUnprocessableEntityResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Role } from '../enums/role.enums';
import { Roles } from '../roles/decorator';
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
  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(ClassSerializerInterceptor)
  @Roles(Role.Admin)
  create(@Body() createCodeQrDto: CreateCodeQrDto) {
    return this.codeQrService.create(createCodeQrDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(ClassSerializerInterceptor)
  @Roles(Role.Admin)
  @ApiOkResponse({ description: 'Codes Qr Bien retourné.'})
  findAll() {
    return this.codeQrService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(ClassSerializerInterceptor)
  @Roles(Role.Admin)
  @ApiNotFoundResponse({ description: 'Code Qr  not found.' })
  @ApiOkResponse({ description: 'Code Qr Bien retourné.'})
  findOne(@Param('id') id: string) {
    return this.codeQrService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(ClassSerializerInterceptor)
  @Roles(Role.Admin)
  @ApiOkResponse({ description: 'Update successfully'})
  update(@Param('id') id: string, @Body() updateCodeQrDto: UpdateCodeQrDto) {
    return this.codeQrService.update(+id, updateCodeQrDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-key')
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOkResponse({ description: 'Delete  successfully'})
  remove(@Param('id') id: string) {
    return this.codeQrService.remove(+id);
  }
}
