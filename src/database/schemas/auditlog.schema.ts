import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class AuditLog {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { nullable: true })
  ip: string;

  @Column('varchar', {})
  method: string;

  @Column('varchar', {})
  url: string;

  @Column('json', { nullable: true })
  requestBody: Record<string, any>;

  @Column('json', { nullable: true })
  responseBody: Record<string, any>;

  @Column('int')
  statusCode: number;

  @Column('uuid', { nullable: true, default: null })
  userId: string | null;

  @Column('uuid', { nullable: true, default: null })
  adminId: string | null;

  @Column('varchar', {})
  message: string;

  @Column('json', { nullable: true })
  oldValues: Record<string, any>;

  @Column('json', { nullable: true })
  newValues: Record<string, any>;

  @CreateDateColumn()
  createdAt: Date;
}
