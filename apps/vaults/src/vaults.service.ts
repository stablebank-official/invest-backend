import { Injectable } from '@nestjs/common';

@Injectable()
export class VaultsService {
  getHello(): string {
    return 'Hello World!';
  }
}
