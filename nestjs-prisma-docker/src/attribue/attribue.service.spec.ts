import { Test, TestingModule } from '@nestjs/testing';
import { AttribueService } from './attribue.service';

describe('AttribueService', () => {
  let service: AttribueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AttribueService],
    }).compile();

    service = module.get<AttribueService>(AttribueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
