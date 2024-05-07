import { Injectable } from '@nestjs/common';
import {
  AuthenticationStrategy,
  IdentityInterface,
} from '../../domain/interfaces/authentication.interface';

@Injectable()
export class IdentityLoginStrategy implements AuthenticationStrategy {
  async login({
    firstIdentity,
    secondIdentity,
  }: IdentityInterface): Promise<boolean> {
    try {
      if (
        firstIdentity.identity === secondIdentity.identity &&
        firstIdentity.numberProduct === secondIdentity.numberProduct &&
        firstIdentity.product === secondIdentity.product &&
        firstIdentity.typeIdentity === secondIdentity.typeIdentity
      ) {
        return true;
      } else {
        throw new Error('Invalid identity provided');
      }
    } catch (error) {
      console.error('Error during identity validation:', error);
      throw new Error('Error during identity validation');
    }
  }
}
