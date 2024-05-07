import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Product } from './product.entity';

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

  @OneToOne(() => Product, (product) => product.user)
  product: Product;
}
