import { Injectable } from '@nestjs/common';
import {
  AuthenticationStrategy,
  IPasswordParams,
} from '../../domain/interfaces/authentication.interface';
@Injectable()
export class PasswordLoginStrategy implements AuthenticationStrategy {
  async login(loginParams: IPasswordParams): Promise<boolean> {
    const { userName: email, password } = loginParams;
    try {
      if (email === loginParams.dbName && password === loginParams.dbPassword) {
        return true;
      } else {
        throw new Error('Invalid credentials provided');
      }
    } catch (error) {
      throw new Error('Error during password validation');
    }
  }
}
