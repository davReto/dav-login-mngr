import { Injectable } from '@nestjs/common';
import { AuthenticationStrategy } from '../../domain/interfaces/authentication.interface';
import { AuthLoginDto } from '../../domain/dto/auth.dto';

@Injectable()
export class PasswordLoginStrategy implements AuthenticationStrategy {
  async login(loginParams: AuthLoginDto): Promise<boolean> {
    const { email, password } = loginParams;
    if (email === 'testuser' && password === 'securepassword') {
      return true;
    } else {
      return false;
    }
  }
}
