import { Injectable } from '@nestjs/common';
import { AuthenticationStrategy } from '../../domain/interfaces/authentication.interface';
import { IdentityDto } from '../../domain/dto/identity.dto';

@Injectable()
export class IdentityLoginStrategy implements AuthenticationStrategy {
  async login(loginParams: IdentityDto): Promise<boolean> {
    if (loginParams.identity === '123456') {
      return true;
    } else {
      return false;
    }
  }
}
