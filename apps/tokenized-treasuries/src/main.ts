import { NestFactory } from '@nestjs/core';
import { TokenizedTreasuriesModule } from './tokenized-treasuries.module';

async function bootstrap() {
  const app = await NestFactory.create(TokenizedTreasuriesModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
