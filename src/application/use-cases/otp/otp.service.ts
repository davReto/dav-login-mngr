import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { AuthenticationStrategy } from '../../../domain/interfaces/authentication.interface';
import { OtpDto } from '../../../domain/dto/otp.dto';

@Injectable()
export class OtpService {
  constructor(
    @Inject('OTP_STRATEGY') private readonly strategy: AuthenticationStrategy,
  ) {}

  async login(loginParams: OtpDto): Promise<boolean> {
    try {
      return await this.strategy.login(loginParams);
    } catch (error) {
      console.error('Authentication error:', error);
      throw new BadRequestException('Invalid otp.');
    }
  }
}
