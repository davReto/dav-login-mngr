import { Injectable, Inject } from '@nestjs/common';
import { AuthenticationStrategy } from '../../domain/interfaces/authentication.interface';

@Injectable()
export class AuthenticationStrategyFactory {
  constructor(
    @Inject('OTP_STRATEGY') private otpStrategy: AuthenticationStrategy,
    @Inject('PASSWORD_STRATEGY')
    private passwordStrategy: AuthenticationStrategy,
  ) {}

  getStrategy(type: string): AuthenticationStrategy {
    switch (type) {
      case 'otp':
        return this.otpStrategy;
      case 'password':
        return this.passwordStrategy;
      default:
        throw new Error('Invalid authentication type');
    }
  }
}
