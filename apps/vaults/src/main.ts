import { NestFactory } from '@nestjs/core';
import { VaultsModule } from './vaults.module';

async function bootstrap() {
  const app = await NestFactory.create(VaultsModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
