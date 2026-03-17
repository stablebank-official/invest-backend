import { Test, TestingModule } from '@nestjs/testing';
import { TokenizedTreasuriesController } from './tokenized-treasuries.controller';
import { TokenizedTreasuriesService } from './tokenized-treasuries.service';

describe('TokenizedTreasuriesController', () => {
  let tokenizedTreasuriesController: TokenizedTreasuriesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TokenizedTreasuriesController],
      providers: [TokenizedTreasuriesService],
    }).compile();

    tokenizedTreasuriesController = app.get<TokenizedTreasuriesController>(TokenizedTreasuriesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(tokenizedTreasuriesController.getHello()).toBe('Hello World!');
    });
  });
});
