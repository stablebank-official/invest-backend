import { Test, TestingModule } from '@nestjs/testing';
import { YieldStrategiesController } from './yield-strategies.controller';
import { YieldStrategiesService } from './yield-strategies.service';

describe('YieldStrategiesController', () => {
  let yieldStrategiesController: YieldStrategiesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [YieldStrategiesController],
      providers: [YieldStrategiesService],
    }).compile();

    yieldStrategiesController = app.get<YieldStrategiesController>(YieldStrategiesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(yieldStrategiesController.getHello()).toBe('Hello World!');
    });
  });
});
