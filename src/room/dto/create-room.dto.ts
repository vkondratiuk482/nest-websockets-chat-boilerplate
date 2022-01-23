import { IsOptional, IsString } from 'class-validator';

export class CreateRoomDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsString()
  readonly avatar: string;

  @IsOptional()
  @IsString()
  ownerId?: string;
}
