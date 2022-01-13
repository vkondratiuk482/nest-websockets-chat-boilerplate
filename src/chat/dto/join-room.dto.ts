import { IsString } from 'class-validator';

export class JoinRoomDto {
  @IsString()
  roomId: string;
}
