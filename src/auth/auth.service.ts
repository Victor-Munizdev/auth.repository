import { Injectable } from "@nestjs/common"
import type { JwtService } from "@nestjs/jwt"
import type { UsersService } from "../users/users.service"
import * as bcrypt from "bcryptjs"

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email)

    if (user && (await bcrypt.compare(password, user.senha))) {
      const { senha: userPassword, ...result } = user
      return result
    }
    return null
  }

  async login(user: any) {
    const payload = {
      email: user.email,
      sub: user.id,
      nome: user.nome,
      role: user.role,
    }

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        email: user.email,
        nome: user.nome,
        role: user.role,
      },
    }
  }
}
