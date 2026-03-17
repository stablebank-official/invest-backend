import { Module } from '@nestjs/common';
import { TokenizedTreasuriesController } from './tokenized-treasuries.controller';
import { TokenizedTreasuriesService } from './tokenized-treasuries.service';

@Module({
  imports: [],
  controllers: [TokenizedTreasuriesController],
  providers: [TokenizedTreasuriesService],
})
export class TokenizedTreasuriesModule {}
