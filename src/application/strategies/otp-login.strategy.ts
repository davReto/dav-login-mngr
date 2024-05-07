import { Injectable } from '@nestjs/common';
import { AuthenticationStrategy } from '../../domain/interfaces/authentication.interface';
import { OtpDto } from '../../domain/dto/otp.dto';

@Injectable()
export class OtpLoginStrategy implements AuthenticationStrategy {
  async login(loginParams: OtpDto): Promise<boolean> {
    try {
      if (loginParams.otp === '123456') {
        return true;
      } else {
        throw new Error('Invalid OTP provided');
      }
    } catch (error) {
      console.error('Error during OTP validation:', error);
      throw new Error('Error during OTP validation:');
    }
  }
}
