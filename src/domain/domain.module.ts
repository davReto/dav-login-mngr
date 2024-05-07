import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';
import { Product } from './entities/product.entity';
import { Word } from './entities/word.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Product, Word])],
  providers: [UserRepository],
  exports: [UserRepository],
})
export class DomainModule {}
