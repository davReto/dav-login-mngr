import { AuthenticationStrategy } from '../interfaces/authentication.interface';

export class OtpLoginStrategy implements AuthenticationStrategy {
  async login(loginParams: { otp: string; userId: string }): Promise<boolean> {
    if (loginParams.otp === '123456') {
      return true;
    } else {
      return false;
    }
  }
}
