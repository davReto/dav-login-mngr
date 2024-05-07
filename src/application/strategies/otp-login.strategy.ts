import { Injectable } from '@nestjs/common';
import { AuthenticationStrategy } from '../../domain/interfaces/authentication.interface';
import { OtpDto } from '../../domain/dto/otp.dto';

@Injectable()
export class OtpLoginStrategy implements AuthenticationStrategy {
  async login(loginParams: OtpDto): Promise<boolean> {
    if (loginParams.otp === '123456') {
      return true;
    } else {
      return false;
    }
  }
}
