import { Test, TestingModule } from '@nestjs/testing';
import { RwasController } from './rwas.controller';
import { RwasService } from './rwas.service';

describe('RwasController', () => {
  let rwasController: RwasController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RwasController],
      providers: [RwasService],
    }).compile();

    rwasController = app.get<RwasController>(RwasController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(rwasController.getHello()).toBe('Hello World!');
    });
  });
});
