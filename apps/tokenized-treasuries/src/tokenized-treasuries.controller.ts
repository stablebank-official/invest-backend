import { Controller, Get } from '@nestjs/common';
import { TokenizedTreasuriesService } from './tokenized-treasuries.service';

@Controller()
export class TokenizedTreasuriesController {
  constructor(private readonly tokenizedTreasuriesService: TokenizedTreasuriesService) {}

  @Get()
  getHello(): string {
    return this.tokenizedTreasuriesService.getHello();
  }
}
