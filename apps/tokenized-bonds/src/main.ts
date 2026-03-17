import { NestFactory } from '@nestjs/core';
import { TokenizedBondsModule } from './tokenized-bonds.module';

async function bootstrap() {
  const app = await NestFactory.create(TokenizedBondsModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
