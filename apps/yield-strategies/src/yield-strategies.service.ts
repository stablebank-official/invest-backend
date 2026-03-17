import { Injectable } from '@nestjs/common';

@Injectable()
export class YieldStrategiesService {
  getHello(): string {
    return 'Hello World!';
  }
}
