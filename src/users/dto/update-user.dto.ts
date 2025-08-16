import { IsEmail, IsString, MinLength, IsOptional } from "class-validator";

export class UpdateUserDto {
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  nome?: string;

  @IsString()
  @MinLength(6)
  @IsOptional()
  senha?: string;

  @IsString()
  @IsOptional()
  role?: string;
}
