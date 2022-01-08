import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';

import { RequestWithUser } from './interfaces/request-with-user.interface';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

import { RoomService } from './room.service';

import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { OwnershipGuard } from './guards/ownership.guard';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.roomService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async find() {
    return this.roomService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Req() req: RequestWithUser,
    @Body() createRoomDto: CreateRoomDto,
  ) {
    createRoomDto.ownerId = req.user.id;

    return this.roomService.create(createRoomDto);
  }

  @UseGuards(JwtAuthGuard, OwnershipGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Req() req: RequestWithUser,
    @Body() updateRoomDto: UpdateRoomDto,
  ) {
    return this.roomService.update(id, updateRoomDto);
  }

  @UseGuards(JwtAuthGuard, OwnershipGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.roomService.remove(id);
  }
}
