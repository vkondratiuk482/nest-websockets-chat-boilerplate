import { Body, Controller, Post } from '@nestjs/common';

import { CreateRoomDto } from './dto/create-room.dto';

@Controller('chat')
export class ChatController {
  @Post()
  createRoom(@Body() createRoomDto: CreateRoomDto) {}
}
