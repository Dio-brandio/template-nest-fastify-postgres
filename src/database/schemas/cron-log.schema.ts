// cron-log.entity.ts
import { CronStatus } from 'src/constants/cron.constant';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({})
export class CronLog {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  cronName: string;

  @Column({ nullable: true })
  status: CronStatus;

  @Column({ nullable: true })
  message: string;

  @Column('jsonb', { nullable: true })
  error: Record<string, any>;

  @CreateDateColumn()
  createdAt: Date;
}
