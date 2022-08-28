import { Test, TestingModule } from '@nestjs/testing';
import { SomePaypalService } from './some-paypal.service';

describe('SomePaypalService', () => {
  let service: SomePaypalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SomePaypalService],
    }).compile();

    service = module.get<SomePaypalService>(SomePaypalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
