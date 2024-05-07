import { Module } from '@nestjs/common';

import { DomainModule } from '../domain/domain.module';
import { CustomerService } from './use-cases/customer/customer.service';
import { AuthService } from './use-cases/auth/auth.service';
import { OtpService } from './use-cases/otp/otp.service';
import { OtpLoginStrategy } from './strategies/otp-login.strategy';
import { PasswordLoginStrategy } from './strategies/password-login.strategy';

@Module({
  imports: [DomainModule],
  providers: [
    {
      provide: 'OTP_STRATEGY',
      useClass: OtpLoginStrategy,
    },
    {
      provide: 'PASSWORD_STRATEGY',
      useClass: PasswordLoginStrategy,
    },
    CustomerService,
    AuthService,
    OtpService,
  ],
  exports: [CustomerService, AuthService, OtpService],
})
export class ApplicationModule {}
