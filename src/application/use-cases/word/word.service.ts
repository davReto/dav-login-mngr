import { Inject, Injectable } from '@nestjs/common';
import { WordDto } from '../../../domain/dto/word.dto';
import { AuthenticationStrategy } from '../../../domain/interfaces/authentication.interface';

@Injectable()
export class WordService {
  constructor(
    @Inject('WORD_STRATEGY') private readonly strategy: AuthenticationStrategy,
  ) {}

  async login(loginParams: WordDto): Promise<boolean> {
    return this.strategy.login(loginParams);
  }
}
