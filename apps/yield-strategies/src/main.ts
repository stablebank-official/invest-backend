import { NestFactory } from '@nestjs/core';
import { YieldStrategiesModule } from './yield-strategies.module';

async function bootstrap() {
  const app = await NestFactory.create(YieldStrategiesModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
