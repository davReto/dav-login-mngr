import { Module } from '@nestjs/common';

import { DomainModule } from '../domain/domain.module';
import { CustomerService } from './use-cases/customer/customer.service';
import { AuthService } from './use-cases/auth/auth.service';
import { OtpService } from './use-cases/otp/otp.service';
import { OtpLoginStrategy } from './strategies/otp-login.strategy';
import { PasswordLoginStrategy } from './strategies/password-login.strategy';
import { IdentityService } from './use-cases/indentity/indentity.service';
import { IdentityLoginStrategy } from './strategies/identity-login.strategy';
import { WordStrategy } from './strategies/word.strategy';
import { WordService } from './use-cases/word/word.service';

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
    {
      provide: 'IDENTITY_STRATEGY',
      useClass: IdentityLoginStrategy,
    },
    {
      provide: 'WORD_STRATEGY',
      useClass: WordStrategy,
    },
    CustomerService,
    AuthService,
    OtpService,
    IdentityService,
    WordService,
  ],
  exports: [
    CustomerService,
    AuthService,
    OtpService,
    IdentityService,
    WordService,
  ],
})
export class ApplicationModule {}
