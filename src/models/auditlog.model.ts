import { Column, CreatedAt, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: 'audit_logs',
  timestamps: true,
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
    type: DataType.TEXT,
    allowNull: true,
    defaultValue: null,
  })
  requestBody: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    defaultValue: null,
  })
  responseBody: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  statusCode: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: null,
  })
  message: string;

  @CreatedAt
  @Column({
    type: DataType.DATE,
    defaultValue: null,
    allowNull: true,
  })
  declare createdAt: Date;

}
