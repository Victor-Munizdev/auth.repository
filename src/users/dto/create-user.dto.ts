import { IsEmail, IsNotEmpty, IsString, MinLength, IsOptional } from "class-validator"

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  nome: string

  @IsString()
  @MinLength(6)
  senha: string

  @IsString()
  @IsOptional()
  role?: string
}
