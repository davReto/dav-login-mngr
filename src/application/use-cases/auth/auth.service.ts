import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { AuthenticationStrategy } from '../../../domain/interfaces/authentication.interface';
import { AuthLoginDto } from '../../../domain/dto/auth.dto';
import { UserRepository } from '../../../domain/repositories/user.repository';
import { User } from '../../../domain/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @Inject('PASSWORD_STRATEGY')
    private readonly strategy: AuthenticationStrategy,
    private userRepository: UserRepository,
  ) {}

  async login(loginParams: AuthLoginDto): Promise<User> {
    try {
      const user = await this.userRepository.loginUserIdentity(loginParams);
      const validate = await this.strategy.login({
        userName: user.name,
        password: user.password,
        dbName: loginParams.userName,
        dbPassword: loginParams.password,
      });
      if (!validate) {
        throw new BadRequestException('Invalid auth.');
      }
      delete user.password;
      return user;
    } catch (error) {
      console.error('Authentication auth error:', error);
      throw new BadRequestException('Invalid auth.');
    }
  }
}
