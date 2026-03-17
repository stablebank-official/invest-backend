import { Controller, Get } from '@nestjs/common';
import { VaultsService } from './vaults.service';

@Controller()
export class VaultsController {
  constructor(private readonly vaultsService: VaultsService) {}

  @Get()
  getHello(): string {
    return this.vaultsService.getHello();
  }
}
