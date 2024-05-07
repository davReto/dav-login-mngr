import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/user.dto';
import { Product } from '../entities/product.entity';
import { Word } from '../entities/word.entity';
import { IdentityDto } from '../dto/identity.dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Word)
    private wordRepository: Repository<Word>,
  ) {}

  async createUser(userData: CreateUserDto): Promise<User> {
    const { product, word, ...userDetails } = userData;

    const newUser = this.userRepository.create(userDetails);
    await this.userRepository.save(newUser);

    const newProduct = this.productRepository.create({
      ...product,
      user: newUser,
    });
    await this.productRepository.save(newProduct);

    const newWord = this.wordRepository.create({
      ...word,
      user: newUser,
    });
    await this.wordRepository.save(newWord);

    newUser.product = newProduct;
    newUser.word = newWord;
    return newUser;
  }

  async getUserById(userId: string): Promise<User> {
    try {
      const user = await this.userRepository.findOne({
        where: { id: userId },
        relations: ['product', 'word'],
      });
      return user;
    } catch (error) {
      throw new Error('User not found');
    }
  }
  async getUserByIdentity({
    identity,
    typeIdentity,
    numberProduct,
    product,
  }: IdentityDto): Promise<User> {
    try {
      const user = await this.userRepository.findOne({
        where: {
          numberIdentification: identity,
          typeIdentification: typeIdentity,
          product: {
            numberProduct: numberProduct,
            numberIdentification: product,
          },
        },
        relations: ['product', 'word'],
      });
      return user;
    } catch (error) {
      throw new Error('identity not found');
    }
  }
}
