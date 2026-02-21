import { RoleStatus } from 'src/constants/role-status.constant';
import { Admin } from 'src/database/schemas/admin.schema';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { RolePermission } from './role-permission.schema';

@Entity()
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  displayName: string;

  @Column('varchar')
  roleName: string;

  @Column('varchar', { default: RoleStatus.ACTIVE })
  status: RoleStatus;

  @Column('text', { nullable: true })
  description: string | null;

  @Column('boolean', { default: false })
  isDeleted: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  isActive(): boolean {
    return this.status === RoleStatus.ACTIVE;
  }

  //relations

  @OneToMany(() => RolePermission, (permission) => permission.role, {
    cascade: true,
  })
  permissions: RolePermission[];

  @OneToOne(() => Admin, (admin) => admin.role)
  admin: Admin;
}
