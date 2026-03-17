import { Injectable } from '@nestjs/common';

@Injectable()
export class RwasService {
  getHello(): string {
    return 'Hello World!';
  }
}
