import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { User } from './user.schema';

@Entity()
export class UserNotification {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 255 })
  notificationType: string;

  @Column('uuid')
  userId: string;

  @Column('varchar', { length: 255 })
  title: string;

  @Column('text')
  message: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column('boolean', { default: false })
  isRead: boolean;

  // relations
  @ManyToOne(() => User, (user) => user.notifications)
  @JoinColumn({ name: 'userId' })
  user: User;
}
