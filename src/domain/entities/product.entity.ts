import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ name: 'number_product' })
  numberProduct: string;

  @Column({ name: 'number_identification' })
  numberIdentification: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'id_user' })
  user: User;
}
