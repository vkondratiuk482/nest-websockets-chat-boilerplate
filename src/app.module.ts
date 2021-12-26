import { Module } from '@nestjs/common';
import { ChatModule } from './chat/chat.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ChatModule, UserModule],
  providers: [],
})
export class AppModule {}
