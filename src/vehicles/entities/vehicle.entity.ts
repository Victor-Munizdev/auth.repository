import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm"
import { User } from "../../users/entities/user.entity"

@Entity("veiculos")
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  marca: string

  @Column()
  modelo: string

  @Column()
  ano: number

  @Column()
  cor: string

  @Column({ nullable: true })
  placa: string

  @Column("decimal", { precision: 10, scale: 2, nullable: true })
  preco: number

  @Column({ default: "disponivel" })
  status: string

  @ManyToOne(
    () => User,
    (user) => user.vehicles,
  )
  @JoinColumn({ name: "id_proprietario" })
  owner: User

  @Column({ name: "id_proprietario" })
  idProprietario: number

  @CreateDateColumn({ name: "criado_em" })
  criadoEm: Date

  @UpdateDateColumn({ name: "atualizado_em" })
  atualizadoEm: Date
}
