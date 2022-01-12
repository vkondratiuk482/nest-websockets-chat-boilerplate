import { IsOptional, IsString, IsUUID } from 'class-validator';

export class AddMessageDto {
  @IsString()
  text: string;

  @IsUUID()
  roomId: string;

  @IsOptional()
  @IsUUID()
  userId?: string;
}
