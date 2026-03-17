import { Injectable } from '@nestjs/common';

@Injectable()
export class TokenizedBondsService {
  getHello(): string {
    return 'Hello World!';
  }
}
