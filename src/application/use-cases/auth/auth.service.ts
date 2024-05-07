import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { AuthenticationStrategy } from '../../../domain/interfaces/authentication.interface';
import { AuthLoginDto } from '../../../domain/dto/auth.dto';
import { UserRepository } from '../../../domain/repositories/user.repository';

@Injectable()
export class AuthService {
  constructor(
    @Inject('PASSWORD_STRATEGY')
    private readonly strategy: AuthenticationStrategy,
    private userRepository: UserRepository,
  ) {}

  async login(loginParams: AuthLoginDto): Promise<boolean> {
    try {
      const user = await this.userRepository.loginUserIdentity(loginParams);
      return this.strategy.login({
        userName: user.name,
        password: user.password,
        dbName: loginParams.userName,
        dbPassword: loginParams.password,
      });
    } catch (error) {
      console.error('Authentication auth error:', error);
      throw new BadRequestException('Invalid auth.');
    }
  }
}
