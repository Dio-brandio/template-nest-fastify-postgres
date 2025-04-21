import {
  Column,
  CreatedAt,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'audit_logs',
  timestamps: false,
})
export class AuditLog extends Model<AuditLog> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING(15),
    allowNull: false,
  })
  ip: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: null,
  })
  userId: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  method: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  url: string;

  @Column({
    type: DataType.JSON,
    allowNull: true,
    defaultValue: null,
  })
  requestBody: Record<string, any>;

  @Column({
    type: DataType.JSON,
    allowNull: true,
    defaultValue: null,
  })
  responseBody: Record<string, any>;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  statusCode: number;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    defaultValue: null,
  })
  message: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: null,
  })
  duration?: number;

  @Column({
    type: DataType.STRING(10),
    allowNull: true,
    defaultValue: null,
  })
  module: string;

  @CreatedAt
  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    allowNull: true,
  })
  declare createdAt: Date;

  @Column({
    type: DataType.JSON,
    allowNull: true,
    defaultValue: null,
  })
  oldValues: Record<string, any>;

  @Column({
    type: DataType.JSON,
    allowNull: true,
    defaultValue: null,
  })
  newValues: Record<string, any>;
}
