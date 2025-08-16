import { Injectable, ConflictException, NotFoundException } from "@nestjs/common"
import type { Repository } from "typeorm"
import type { User } from "./entities/user.entity"
import type { CreateUserDto } from "./dto/create-user.dto"
import * as bcrypt from "bcryptjs"

@Injectable()
export class UsersService {
  constructor(private usersRepository: Repository<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, senha, ...userData } = createUserDto

    const existingUser = await this.usersRepository.findOne({ where: { email } })
    if (existingUser) {
      throw new ConflictException("Email já está em uso")
    }

    const hashedPassword = await bcrypt.hash(senha, 10)

    const user = this.usersRepository.create({
      ...userData,
      email,
      senha: hashedPassword,
    })

    return this.usersRepository.save(user)
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { email } })
  }

  async findById(id: number): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id } })
    if (!user) {
      throw new NotFoundException("Usuário não encontrado")
    }
    return user
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find()
  }
}
