import { Test, TestingModule } from '@nestjs/testing';
import { VaultsController } from './vaults.controller';
import { VaultsService } from './vaults.service';

describe('VaultsController', () => {
  let vaultsController: VaultsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [VaultsController],
      providers: [VaultsService],
    }).compile();

    vaultsController = app.get<VaultsController>(VaultsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(vaultsController.getHello()).toBe('Hello World!');
    });
  });
});
