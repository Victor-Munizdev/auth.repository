import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Exclude } from "class-transformer";
import { Vehicle } from "../../vehicles/entities/vehicle.entity";

@Entity("usuarios")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  nome: string;

  @Column()
  @Exclude()
  senha: string;

  @Column({ default: "usuario" })
  role: string;

  @OneToMany(() => Vehicle, (vehicle) => vehicle.owner)
  vehicles: Vehicle[];

  @CreateDateColumn({ name: "criado_em" })
  criadoEm: Date;

  @UpdateDateColumn({ name: "atualizado_em" })
  atualizadoEm: Date;
}
