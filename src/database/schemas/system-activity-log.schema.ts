import { SystemActivityLogStatus } from 'src/constants/system-activity-log.constant';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Admin } from './admin.schema';
import { User } from './user.schema';

@Entity()
export class SystemActivityLog {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid', { nullable: true, default: null })
  userId: string | null;

  @Column('uuid', { nullable: true, default: null })
  adminId: string | null;

  @Column('varchar')
  action: string;

  @Column('varchar')
  status: SystemActivityLogStatus;

  @Column('text', { nullable: true, default: null })
  description: string | null;

  @Column('varchar')
  ipAddress: string;

  @CreateDateColumn()
  createdAt: Date;

  // Relations
  @ManyToOne(() => Admin, (admin) => admin.systemActivityLogs, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'adminId' })
  admin?: Admin;

  @ManyToOne(() => User, (user) => user.systemActivityLogs, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'userId' })
  user?: User;
}
