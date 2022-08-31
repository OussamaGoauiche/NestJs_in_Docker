import { Controller, Post, Body,  UseGuards, ClassSerializerInterceptor, UseInterceptors, Get } from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Role } from '../enums/role.enums';
import { Roles } from '../roles/decorator';
import { PhoneService } from './phone.service';
import { CreatePhoneDto } from './phone.dto';
@Controller('phone')
@ApiTags('phone')
export class PhoneController {
  constructor(private readonly phoneService: PhoneService) {}

  
  @Post()
  create(@Body() createPhoneDto:CreatePhoneDto) {
    return this.phoneService.sendSMS(createPhoneDto)
  }

  @Get()
  test() {
    return  
  }
}
