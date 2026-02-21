import { UserSocialProvider } from 'src/constants/user-social-provider.constant';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { User } from './user.schema';

@Entity()
export class UserSocialLogin {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  userId: string;

  @Column({ type: 'varchar', length: 20 })
  provider: UserSocialProvider;

  @Column({ type: 'varchar', length: 512 })
  providerUserId: string; // sub / id returned by the provider

  @Index()
  @Column({ type: 'varchar', length: 255, nullable: true })
  email?: string;

  @Column({ type: 'jsonb', default: '{}' })
  profileData: Record<string, any>;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (u) => u.userSocialLogins, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;
}
