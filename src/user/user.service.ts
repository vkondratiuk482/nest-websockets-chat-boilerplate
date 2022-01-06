import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { v4 as uuidv4 } from 'uuid';
import { Repository } from 'typeorm';

import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async findAll() {
    const users = await this.userRepository.find();

    return users;
  }

  async findOne(id: string) {
    try {
      const user = await this.userRepository.findOne(id);

      if (!user) {
        throw new NotFoundException(`There is no user under id ${id}`);
      }

      return user;
    } catch (e) {}
  }

  async findOneByUsername(username: string) {
    const user = await this.userRepository.findOne({ username });

    return user;
  }

  async create(createUserDto: CreateUserDto) {
    const id = uuidv4();

    const user = await this.userRepository.create({
      id,
      ...createUserDto,
    });

    return this.userRepository.save(user);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.preload({
      id,
      ...updateUserDto,
    });

    if (!user) {
      throw new NotFoundException(`There is no user under id ${id}`);
    }

    return this.userRepository.save(user);
  }

  async remove(id: string) {
    const user = await this.findOne(id);

    return this.userRepository.remove(user);
  }
}
