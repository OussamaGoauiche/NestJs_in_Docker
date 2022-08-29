import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
 import {Csrf} from "ncsrf";

@Controller()
@ApiTags('utilisateur')
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

  @Get('/token')
  getCsrfToken(@Req() req): any {
    return {
      token: req.csrfToken()
    }
  }

  @Post()
  @Csrf()
  needProtect(): string{
    return "Protected!";
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

}
