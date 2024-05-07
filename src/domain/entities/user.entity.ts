import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Product } from './product.entity';
import { Word } from './word.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ name: 'user_name' })
  name: string;

  @Column({ name: 'type_identification' })
  typeIdentification: string;

  @Column({ name: 'number_identification' })
  numberIdentification: string;

  @Column({ name: 'otp' })
  otp: string;

  @Column()
  password: string;

  @OneToOne(() => Product, (product) => product.user)
  product: Product;

  @OneToOne(() => Word, (word) => word.user)
  word: Word;
}
