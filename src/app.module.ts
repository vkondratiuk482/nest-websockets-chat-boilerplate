import { Module } from '@nestjs/common';

import { ChatModule } from './chat/chat.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ChatModule, UserModule, AuthModule],
  providers: [],
})
export class AppModule {}
