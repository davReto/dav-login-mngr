import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { AuthenticationStrategy } from '../../../domain/interfaces/authentication.interface';
import { OtpDto } from '../../../domain/dto/otp.dto';
import { UserRepository } from '../../../domain/repositories/user.repository';

@Injectable()
export class OtpService {
  constructor(
    @Inject('OTP_STRATEGY') private readonly strategy: AuthenticationStrategy,
    private otpRepository: UserRepository,
  ) {}

  async login(loginParams: OtpDto): Promise<boolean> {
    try {
      const user = await this.otpRepository.getUserById(loginParams.userId);
      console.log('User:', user);
      return await this.strategy.login({
        otp: user.otp,
        userId: user.id,
        otpCheck: loginParams.otp,
      });
    } catch (error) {
      console.error('Authentication otp error:', error);
      throw new BadRequestException('Invalid otp.');
    }
  }
}
