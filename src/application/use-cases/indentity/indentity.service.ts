import { Inject, Injectable } from '@nestjs/common';
import { AuthenticationStrategy } from '../../../domain/interfaces/authentication.interface';
import { IdentityDto } from '../../../domain/dto/identity.dto';

@Injectable()
export class IdentityService {
  constructor(
    @Inject('IDENTITY_STRATEGY')
    private readonly strategy: AuthenticationStrategy,
  ) {}

  async login(loginParams: IdentityDto): Promise<boolean> {
    return this.strategy.login(loginParams);
  }
}
