import { Module } from '@nestjs/common';

import { DomainModule } from '../domain/domain.module';
import { CustomerService } from './use-cases/customer/customer.service';
import { AuthService } from './use-cases/auth/auth.service';

@Module({
  imports: [DomainModule],
  providers: [CustomerService, AuthService],
  exports: [CustomerService, AuthService],
})
export class ApplicationModule {}
