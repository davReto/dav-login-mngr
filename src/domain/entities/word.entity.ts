import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Word {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ name: 'word' })
  word: string;

  @Column({ name: 'phrase' })
  phrase: string;

  @Column({ name: 'key' })
  key: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'id_user' })
  user: User;
}
