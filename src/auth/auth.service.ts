import { Injectable, UnauthorizedException } from '@nestjs/common';

import * as bcrypt from 'bcryptjs';

import { UserService } from './../user/user.service';

import { User } from 'src/user/entities/user.entity';
import { LoginUserDto } from './../user/dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async singUp() {}

  async signIn() {}

  async signOut() {}

  async validateUser(userDto: LoginUserDto): Promise<User> {
    const user = await this.userService.findOneByUsername(userDto.username);

    const passwordEquals = await bcrypt.compare(
      user.password,
      userDto.password,
    );

    if (passwordEquals) return user;

    throw new UnauthorizedException({ message: 'Incorrect password' });
  }
}
