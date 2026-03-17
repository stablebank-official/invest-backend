import { Module } from '@nestjs/common';
import { YieldStrategiesController } from './yield-strategies.controller';
import { YieldStrategiesService } from './yield-strategies.service';

@Module({
  imports: [],
  controllers: [YieldStrategiesController],
  providers: [YieldStrategiesService],
})
export class YieldStrategiesModule {}
