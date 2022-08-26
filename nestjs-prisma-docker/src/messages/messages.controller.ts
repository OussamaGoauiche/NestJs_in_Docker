import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags, ApiUnprocessableEntityResponse } from '@nestjs/swagger';

@Controller('messages')
@ApiTags('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
   @ApiOkResponse({ description: '  Message created successfully.'})
  @ApiUnprocessableEntityResponse({ description: 'Message  already exists.' })
  async create(@Body() createMessageDto: CreateMessageDto) {
    return await this.messagesService.create(createMessageDto);
  }

  @Get()
  @ApiOkResponse({ description: 'Message Bien retourné.'})
  findAll() {
    return this.messagesService.findAll();
  }

  @Get(':id')
    @ApiNotFoundResponse({ description: 'Message   not found.' })
  @ApiOkResponse({ description: 'Message Bien retourné.'})
  findOne(@Param('id') id: string) {
    return this.messagesService.findOne(+id);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Delete  successfully'})
  async remove(@Param('id') id: string) : Promise<any>{
    const id1 = Number(id)
   return await this.messagesService.remove({id_message : id1});
  }
}
