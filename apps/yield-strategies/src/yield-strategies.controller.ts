import { Controller, Get } from '@nestjs/common';
import { YieldStrategiesService } from './yield-strategies.service';

@Controller()
export class YieldStrategiesController {
  constructor(private readonly yieldStrategiesService: YieldStrategiesService) {}

  @Get()
  getHello(): string {
    return this.yieldStrategiesService.getHello();
  }
}
