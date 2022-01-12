import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { v4 as uuidv4 } from 'uuid';
import { Repository } from 'typeorm';

import { Room } from './entities/room.entity';
import { Message } from './entities/message.entity';

import { AddMessageDto } from 'src/chat/dto/add-message.dto';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room) private readonly roomRepository: Repository<Room>,
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  async findAll() {
    const rooms = await this.roomRepository.find();

    return rooms;
  }

  async findMessagesByRoom(id: string) {
    const { messages } = await this.findOne(id);

    return messages;
  }

  async findMessagesWithLimit(id: string, limit: number) {
    const messages = await this.findMessagesByRoom(id);

    const limitedMessages = messages.slice(limit * -1);

    return limitedMessages;
  }

  async findOne(id: string) {
    try {
      const room = await this.roomRepository.findOne(id);

      if (!room) {
        throw new NotFoundException(`There is no room under id ${id}`);
      }

      return room;
    } catch (e) {}
  }

  async findOneByName(name: string) {
    const room = await this.roomRepository.findOne({ name });

    return room;
  }

  async create(createRoomDto: CreateRoomDto) {
    const id = uuidv4();

    const room = await this.roomRepository.create({
      id,
      ...createRoomDto,
    });

    return this.roomRepository.save(room);
  }

  async addMessage(addMessageDto: AddMessageDto) {
    const id = uuidv4();

    const message = await this.messageRepository.create({
      id,
      ...addMessageDto,
    });

    return this.messageRepository.save(message);
  }

  async update(id: string, updateRoomDto: UpdateRoomDto) {
    const room = await this.roomRepository.preload({
      id,
      ...updateRoomDto,
    });

    if (!room) {
      throw new NotFoundException(`There is no room under id ${id}`);
    }

    return this.roomRepository.save(room);
  }

  async remove(id: string) {
    const room = await this.findOne(id);

    return this.roomRepository.remove(room);
  }
}
