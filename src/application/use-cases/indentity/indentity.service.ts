import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { AuthenticationStrategy } from '../../../domain/interfaces/authentication.interface';
import { IdentityDto } from '../../../domain/dto/identity.dto';
import { UserRepository } from '../../../domain/repositories/user.repository';

@Injectable()
export class IdentityService {
  constructor(
    @Inject('IDENTITY_STRATEGY')
    private readonly strategy: AuthenticationStrategy,
    private userRepository: UserRepository,
  ) {}

  async login(loginParams: IdentityDto): Promise<boolean> {
    try {
      const user = await this.userRepository.getUserByIdentity(loginParams);
      return this.strategy.login({
        firstIdentity: {
          identity: user.numberIdentification,
          typeIdentity: user.typeIdentification,
          numberProduct: user.product.numberProduct,
          product: user.product.numberIdentification,
        },
        secondIdentity: {
          identity: loginParams.identity,
          typeIdentity: loginParams.typeIdentity,
          numberProduct: loginParams.numberProduct,
          product: loginParams.product,
        },
      });
    } catch (error) {
      console.error('Authentication identity error:', error);
      throw new BadRequestException('Invalid identity.');
    }
  }
}
