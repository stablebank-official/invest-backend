import { NestFactory } from '@nestjs/core';
import { RwasModule } from './rwas.module';

async function bootstrap() {
  const app = await NestFactory.create(RwasModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
