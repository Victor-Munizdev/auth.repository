import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { AuthModule } from "./auth/auth.module"
import { UsersModule } from "./users/users.module"
import { VehiclesModule } from "./vehicles/vehicles.module"
import { User } from "./users/entities/user.entity"
import { Vehicle } from "./vehicles/entities/vehicle.entity"

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST || "crossover.proxy.rlwy.net",
      port: Number.parseInt(process.env.DB_PORT) || 44359,
      username: process.env.DB_USERNAME || "victor_muniz",
      password: process.env.DB_PASSWORD || "victor_muniz",
      database: process.env.DB_NAME || "victor_muniz_banco",
      entities: [User, Vehicle],
      synchronize: true, // Apenas para desenvolvimento
      ssl: {
        rejectUnauthorized: false, // Para conexões Railway
      },
    }),
    AuthModule,
    UsersModule,
    VehiclesModule,
  ],
})
export class AppModule {}
