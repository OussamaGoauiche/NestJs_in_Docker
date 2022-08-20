import { Module } from '@nestjs/common';
import { AttribueService } from './attribue.service';
import { AttribueController } from './attribue.controller';

@Module({
  controllers: [AttribueController],
  providers: [AttribueService]
})
export class AttribueModule {}
