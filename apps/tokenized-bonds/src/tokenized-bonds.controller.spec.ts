import { Test, TestingModule } from '@nestjs/testing';
import { TokenizedBondsController } from './tokenized-bonds.controller';
import { TokenizedBondsService } from './tokenized-bonds.service';

describe('TokenizedBondsController', () => {
  let tokenizedBondsController: TokenizedBondsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TokenizedBondsController],
      providers: [TokenizedBondsService],
    }).compile();

    tokenizedBondsController = app.get<TokenizedBondsController>(TokenizedBondsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(tokenizedBondsController.getHello()).toBe('Hello World!');
    });
  });
});
