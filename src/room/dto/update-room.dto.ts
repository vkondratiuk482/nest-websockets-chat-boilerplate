import { IsString } from 'class-validator';

export class UpdateRoomDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsString()
  readonly avatar: string;
}
