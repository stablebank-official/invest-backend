import { Injectable } from '@nestjs/common';

@Injectable()
export class TokenizedTreasuriesService {
  getHello(): string {
    return 'Hello World!';
  }
}
