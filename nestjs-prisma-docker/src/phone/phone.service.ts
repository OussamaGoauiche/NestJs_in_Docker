
import { CreateAttribueDto } from './../attribue/dto/create-attribue.dto';
import { Injectable, Logger } from '@nestjs/common';
import { TwilioService } from 'nestjs-twilio';
import { CreatePhoneDto } from './phone.dto';

@Injectable()
export class PhoneService {
  private readonly logger = new Logger(PhoneService.name)
  public constructor(private readonly twilioService: TwilioService) {}

  async sendSMS(createPhoneDto:CreatePhoneDto) {
    this.logger.log("Send SMS", createPhoneDto);
    return this.twilioService.client.messages.create({
      body: createPhoneDto.message,
      from: '+18145593749',
      to:createPhoneDto.distination ,
    });
  }
}
