import { Test, TestingModule } from '@nestjs/testing';
import { SomePaypalController } from './some-paypal.controller';

describe('SomePaypalController', () => {
  let controller: SomePaypalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SomePaypalController],
    }).compile();

    controller = module.get<SomePaypalController>(SomePaypalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
