import { BadRequestException, Injectable } from '@nestjs/common';

import { CreateUserDto } from '../../../domain/dto/user.dto';
import { UserRepository } from '../../../domain/repositories/user.repository';

@Injectable()
export class CustomerService {
  constructor(private userRepository: UserRepository) {}

  async createUser(createUserDto: CreateUserDto) {
    try {
      return await this.userRepository.createUser(createUserDto);
    } catch (error) {
      throw new BadRequestException('Invalid input.');
    }
  }
}
