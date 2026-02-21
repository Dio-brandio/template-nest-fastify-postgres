import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { SystemActivityLog } from './system-activity-log.schema';
import { UserNotification } from './user-notification.schema';
import { UserSocialLogin } from './user-social-login.schema';
import { UserStatus } from '../../constants/user-status.constant';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  userId: string;

  @Column('varchar', { nullable: true, default: '' })
  firstName: string;

  @Column('varchar', { nullable: true, default: '' })
  lastName: string;

  @Column('varchar', { unique: true })
  email: string;

  @Exclude()
  @Column('varchar', { nullable: true, default: null })
  password: string | null;

  @Column('varchar', { nullable: true, default: '' })
  avatarUrl: string;

  @Column('varchar', { nullable: true, default: null })
  avatarKey: string | null;

  @Column('varchar', { default: UserStatus.ACTIVE })
  status: UserStatus;

  @Column('varchar', { nullable: true, default: null })
  firebaseToken: string | null;

  @Column('boolean', { default: false })
  isDeleted: boolean;

  @Column('timestamp', { nullable: true, default: null })
  lastPasswordChangeAt: Date | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  isActive(): boolean {
    return this.status === UserStatus.ACTIVE;
  }

  isBlocked(): boolean {
    return this.status === UserStatus.BLOCKED;
  }

  fullName(): string {
    return `${this.firstName} ${this.lastName}`.trim();
  }

  // relations

  @OneToMany(() => UserNotification, (notification) => notification.user)
  notifications: UserNotification[];

  @OneToMany(() => UserSocialLogin, (usl) => usl.user)
  userSocialLogins: UserSocialLogin[];

  @OneToMany(() => SystemActivityLog, (log) => log.user)
  systemActivityLogs: SystemActivityLog[];
}
