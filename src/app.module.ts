import { Module } from '@nestjs/common';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [ChatModule],
  providers: [],
})
export class AppModule {}
