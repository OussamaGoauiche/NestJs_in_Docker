import { PrismaService } from './prisma.service';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('utilisateur')
export class AppController {
  constructor(
    
    private readonly appService: AppService,
    private readonly prismaService: PrismaService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

}
