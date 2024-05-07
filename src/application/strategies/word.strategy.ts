import { Injectable } from '@nestjs/common';

import { AuthenticationStrategy } from '../../domain/interfaces/authentication.interface';
import { WordDto } from '../../domain/dto/word.dto';

@Injectable()
export class WordStrategy implements AuthenticationStrategy {
  async login({ word }: WordDto): Promise<boolean> {
    if (word === 'cao') {
      return true;
    } else {
      return false;
    }
  }
}
