import { Test, TestingModule } from '@nestjs/testing';
import { PrixgcoinService } from './prixgcoin.service';

describe('PrixgcoinService', () => {
  let service: PrixgcoinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrixgcoinService],
    }).compile();

    service = module.get<PrixgcoinService>(PrixgcoinService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
