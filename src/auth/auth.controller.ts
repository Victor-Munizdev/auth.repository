import { Controller, Post, UseGuards } from "@nestjs/common"
import type { AuthService } from "./auth.service"
import { LocalAuthGuard } from "./guards/local-auth.guard"
import type { Request } from "express"

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post("login")
  async login(req: Request) {
    return this.authService.login(req.user)
  }
}
