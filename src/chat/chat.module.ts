import { Module } from '@nestjs/common';

import { ChatGateway } from './chat.gateway';

import { UserModule } from 'src/user/user.module';
import { AuthModule } from 'src/auth/auth.module';
import { RoomModule } from 'src/room/room.module';

@Module({
  imports: [UserModule, AuthModule, RoomModule],
  providers: [ChatGateway],
})
export class ChatModule {}
