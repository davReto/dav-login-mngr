import { Module } from '@nestjs/common';
import { CustomerService } from './use-cases/customer/customer.service';
import { DomainModule } from '../domain/domain.module';

@Module({
  imports: [DomainModule],
  providers: [CustomerService],
  exports: [CustomerService],
})
export class ApplicationModule {}
