import { Controller, Get } from '@nestjs/common';
import { TokenizedBondsService } from './tokenized-bonds.service';

@Controller()
export class TokenizedBondsController {
  constructor(private readonly tokenizedBondsService: TokenizedBondsService) {}

  @Get()
  getHello(): string {
    return this.tokenizedBondsService.getHello();
  }
}
