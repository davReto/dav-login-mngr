import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/user.dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findByName(name: string) {
    return this.userRepository
      .createQueryBuilder('user')
      .where('user.name = :name', { name })
      .getMany();
  }

  async createUser(userData: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(userData); // crea una instancia de la entidad User
    return this.userRepository.save(user); // guarda la instancia en la base de datos
  }
}
