import { Injectable, NotFoundException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { UserService } from 'src/user/user.service';

import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: JwtPayload) {
    const user = this.userService.findOne(payload.id);

    if (user) {
      return user;
    }

    throw new NotFoundException(`User under this id does not exist`);
  }
}
