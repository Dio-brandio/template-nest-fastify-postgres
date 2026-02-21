import { Exclude } from 'class-transformer';
import { AdminStatus } from 'src/constants/admin.constant';
import { DefaultLocationMeta } from 'src/constants/default-location-meta.contant';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Role } from './role.schema';
import { SystemActivityLog } from './system-activity-log.schema';

@Entity()
export class Admin {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { unique: true })
  userId: string;

  @Column('uuid')
  roleId: string;

  @Column('varchar', { nullable: true, default: '' })
  firstName: string;

  @Column('varchar', { nullable: true, default: '' })
  lastName: string;

  @Column('varchar', { unique: true })
  email: string;

  @Column('varchar', { default: AdminStatus.ACTIVE })
  status: AdminStatus;

  @Exclude()
  @Column('varchar', { nullable: true, default: null })
  password: string | null;

  @Exclude()
  @Column('varchar', { nullable: true, default: null })
  tempPassword: string | null;

  @Column('timestamptz', { nullable: true, default: null })
  lastLoginAt: Date | null;

  @Column('varchar', { nullable: true, default: '' })
  defaultLocation: string | null;

  @Column('jsonb', { nullable: true, default: {} })
  locationMetadata: DefaultLocationMeta | null;

  @Column('varchar', { nullable: true, default: '' })
  avatarUrl: string;

  @Column('varchar', { nullable: true, default: null })
  avatarKey: string | null;

  @Column('varchar', { nullable: true, default: null })
  firebaseToken: string | null;

  @Column('boolean', { default: false })
  isDeleted: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  fullName(): string {
    return `${this.firstName} ${this.lastName}`.trim();
  }

  isActive(): boolean {
    return this.status === AdminStatus.ACTIVE;
  }

  //relations
  @OneToOne(() => Role, (role) => role.admin)
  @JoinColumn({ name: 'roleId' })
  role: Role;

  @OneToMany(() => SystemActivityLog, (log) => log.admin)
  systemActivityLogs: SystemActivityLog[];
}
