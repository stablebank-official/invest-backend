import { Module } from '@nestjs/common';
import { TokenizedBondsController } from './tokenized-bonds.controller';
import { TokenizedBondsService } from './tokenized-bonds.service';

@Module({
  imports: [],
  controllers: [TokenizedBondsController],
  providers: [TokenizedBondsService],
})
export class TokenizedBondsModule {}
