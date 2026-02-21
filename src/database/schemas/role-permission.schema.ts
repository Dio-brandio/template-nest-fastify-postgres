import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Role } from './role.schema';

@Entity()
export class RolePermission {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  roleId: string;

  @Column('varchar')
  moduleName: string;

  @Column('varchar')
  moduleDisplayName: string;

  @Column('boolean', { default: false })
  create: boolean;

  @Column('boolean', { default: false })
  update: boolean;

  @Column('boolean', { default: false })
  read: boolean;

  @Column('boolean', { default: false })
  delete: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Role, (role) => role.permissions, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  role: Role;
}
