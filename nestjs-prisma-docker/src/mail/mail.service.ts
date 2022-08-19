import { CreateUserDto } from './../users/user.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User1 } from '../users/user1.entity';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(user: CreateUserDto) {
    const url = `http://localhost:3000/auth/verify/${user.login}`;

   await this.mailerService.sendMail({
  to: user.login,
  subject: 'Welcome to Nice App! Confirm your Email',
 template: './confirmation', // ✅ template found again in v1.6.0
  context: { 
    name: user.name,
    url,
  },
});
  }
  async sendUserValidation(email : string) {
   await this.mailerService.sendMail({
  to:email,
  subject: 'Your mail are valide',
 template: './reponse.hbs', 
});
  }
}
