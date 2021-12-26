import { IsNumber, IsString } from 'class-validator';

export class CreateRoomDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly userLimit: number;
}
