import { Module } from '@nestjs/common';
import { CustomerController } from './controllers/customer/customer.controller';
import { ApplicationModule } from '../application/application.module';

@Module({
  imports: [ApplicationModule],
  controllers: [CustomerController],
})
export class InfrastructureModule {}
