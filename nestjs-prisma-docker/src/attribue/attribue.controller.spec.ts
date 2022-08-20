import { Test, TestingModule } from '@nestjs/testing';
import { AttribueController } from './attribue.controller';
import { AttribueService } from './attribue.service';

describe('AttribueController', () => {
  let controller: AttribueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttribueController],
      providers: [AttribueService],
    }).compile();

    controller = module.get<AttribueController>(AttribueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
