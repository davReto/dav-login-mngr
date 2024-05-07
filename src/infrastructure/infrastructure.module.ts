import { Module } from '@nestjs/common';
import { CustomerController } from './controllers/customer/customer.controller';
import { ApplicationModule } from '../application/application.module';
import { LoginController } from './controllers/login/login.controller';

@Module({
  imports: [ApplicationModule],
  controllers: [CustomerController, LoginController],
})
export class InfrastructureModule {}
