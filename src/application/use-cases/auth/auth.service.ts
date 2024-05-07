import { Inject, Injectable } from '@nestjs/common';
import { AuthenticationStrategy } from '../../../domain/interfaces/authentication.interface';
import { AuthLoginDto } from '../../../domain/dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject('PASSWORD_STRATEGY')
    private readonly strategy: AuthenticationStrategy,
  ) {}

  async login(loginParams: AuthLoginDto): Promise<boolean> {
    return this.strategy.login(loginParams);
  }
}
