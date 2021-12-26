import { IsBoolean, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly username: string;

  @IsString()
  readonly password: string;

  @IsString()
  readonly avatar: string;

  @IsBoolean()
  readonly is_admin: boolean;
}
