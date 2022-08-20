import { Test, TestingModule } from '@nestjs/testing';
import { PrixgcoinController } from './prixgcoin.controller';
import { PrixgcoinService } from './prixgcoin.service';

describe('PrixgcoinController', () => {
  let controller: PrixgcoinController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrixgcoinController],
      providers: [PrixgcoinService],
    }).compile();

    controller = module.get<PrixgcoinController>(PrixgcoinController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
