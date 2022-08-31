
import { CreateAttribueDto } from './../attribue/dto/create-attribue.dto';
import { Injectable } from '@nestjs/common';
import { TwilioService } from 'nestjs-twilio';
import { CreatePhoneDto } from './phone.dto';

@Injectable()
export class PhoneService {
  public constructor(private readonly twilioService: TwilioService) {}

  async sendSMS(createPhoneDto:CreatePhoneDto) {
    return this.twilioService.client.messages.create({
      body: createPhoneDto.message,
      from: '+212698693251',
      to:createPhoneDto.distination ,
    });
  }
}
