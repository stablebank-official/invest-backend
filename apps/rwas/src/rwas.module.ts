import { Module } from '@nestjs/common';
import { RwasController } from './rwas.controller';
import { RwasService } from './rwas.service';

@Module({
  imports: [],
  controllers: [RwasController],
  providers: [RwasService],
})
export class RwasModule {}
