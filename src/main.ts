import { NestFactory } from "@nestjs/core"
import { ValidationPipe } from "@nestjs/common"
import { AppModule } from "./app.module"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // NestJS method - not a React hook
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  )

  // NestJS method - not a React hook
  app.enableCors()

  const port = process.env.PORT || 3000
  await app.listen(port)
  console.log(`🚗 Vehicle API rodando na porta ${port}`)
}

bootstrap()
