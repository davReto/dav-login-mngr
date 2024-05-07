import { Injectable } from '@nestjs/common';
import {
  AuthenticationStrategy,
  IOtpParams,
} from '../../domain/interfaces/authentication.interface';

@Injectable()
export class OtpLoginStrategy implements AuthenticationStrategy {
  async login(loginParams: IOtpParams): Promise<boolean> {
    try {
      if (loginParams.otp === loginParams.otpCheck) {
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
