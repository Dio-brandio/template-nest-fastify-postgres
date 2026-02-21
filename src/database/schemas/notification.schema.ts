import {
  NotificationStatus,
  NotificationType,
} from 'src/constants/notification.constant';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Admin } from './admin.schema';

@Entity()
export class Notification {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  status: NotificationStatus;

  @Column('varchar')
  title: string;

  @Column('text')
  message: string;

  @Column('varchar', { array: true })
  notificationType: NotificationType[];

  @Column('uuid')
  createdBy: string;

  @Column('timestamp', { nullable: true, default: null })
  scheduledAt: Date | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // Relations
  @ManyToOne(() => Admin, (admin) => admin.id, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'createdBy' })
  creator: Admin;
}
