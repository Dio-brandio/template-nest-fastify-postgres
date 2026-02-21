import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Otp {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index()
  @Column('varchar')
  email: string;

  @Column('varchar')
  code: string;

  @Column('timestamp')
  expiresAt: Date;

  @Column('jsonb', { nullable: true, default: null })
  metadata: Record<string, any> | null;

  @CreateDateColumn()
  createdAt: Date;
}
