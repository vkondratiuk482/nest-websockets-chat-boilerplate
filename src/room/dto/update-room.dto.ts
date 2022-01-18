import { IsOptional, IsString } from 'class-validator';

export class UpdateRoomDto {
  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsString()
  @IsOptional()
  readonly description?: string;

  @IsString()
  @IsOptional()
  readonly avatar?: string;
}
