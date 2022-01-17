import { IsString, IsUUID } from 'class-validator';

export class KickUserDto {
  @IsUUID()
  roomId: string;

  @IsUUID()
  userId: string;

  @IsString()
  reason: string;
}
