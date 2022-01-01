import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';

import * as bcrypt from 'bcryptjs';

import { UserService } from 'src/user/user.service';

import { User } from 'src/user/entities/user.entity';
import { LoginUserDto } from 'src/user/dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async singUp() {}

  async signIn() {}

  async signOut() {}

  async validateUser(userDto: LoginUserDto): Promise<User> {
    const user = await this.userService.findOneByUsername(userDto.username);

    if (!user) {
      throw new NotFoundException({
        message: 'User under this login does not exist',
      });
    }

    const passwordEquals = await bcrypt.compare(
      user.password,
      userDto.password,
    );

    if (passwordEquals) return user;

    throw new UnauthorizedException({ message: 'Incorrect password' });
  }
}
