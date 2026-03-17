import { Controller, Get } from '@nestjs/common';
import { RwasService } from './rwas.service';

@Controller()
export class RwasController {
  constructor(private readonly rwasService: RwasService) {}

  @Get()
  getHello(): string {
    return this.rwasService.getHello();
  }
}
