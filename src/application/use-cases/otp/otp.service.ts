import { Inject, Injectable } from '@nestjs/common';
import { AuthenticationStrategy } from '../../../domain/interfaces/authentication.interface';
import { OtpDto } from '../../../domain/dto/otp.dto';

@Injectable()
export class OtpService {
  constructor(
    @Inject('OTP_STRATEGY') private readonly strategy: AuthenticationStrategy,
  ) {}

  async login(loginParams: OtpDto): Promise<boolean> {
    return this.strategy.login(loginParams);
  }
}
