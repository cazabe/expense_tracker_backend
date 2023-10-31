import { Test, TestingModule } from '@nestjs/testing';
import { PaymentTypeController } from './payment_type.controller';

describe('PaymentTypeController', () => {
  let controller: PaymentTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentTypeController],
    }).compile();

    controller = module.get<PaymentTypeController>(PaymentTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
