import { IsString, IsNotEmpty, IsNumber, IsOptional, Min, Max } from "class-validator"

export class CreateVehicleDto {
  @IsString()
  @IsNotEmpty()
  marca: string

  @IsString()
  @IsNotEmpty()
  modelo: string

  @IsNumber()
  @Min(1900)
  @Max(new Date().getFullYear() + 1)
  ano: number

  @IsString()
  @IsNotEmpty()
  cor: string

  @IsString()
  @IsOptional()
  placa?: string

  @IsNumber()
  @IsOptional()
  @Min(0)
  preco?: number

  @IsString()
  @IsOptional()
  status?: string
}
