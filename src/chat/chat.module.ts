import { Module } from '@nestjs/common';

import { ChatGateway } from './chat.gateway';

import { UserModule } from 'src/user/user.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [UserModule, AuthModule],
  providers: [ChatGateway],
})
export class ChatModule {}
