import { Controller, Post, Body, Get, UseGuards } from "@nestjs/common"
import type { UsersService } from "./users.service"
import type { CreateUserDto } from "./dto/create-user.dto"
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard"

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.usersService.findAll()
  }
}
