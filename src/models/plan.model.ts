import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  Default,
  Unique,
} from 'sequelize-typescript';

@Table({ tableName: 'plans', timestamps: true })
export class Plan extends Model<Plan> {
  @PrimaryKey
  @Column({ type: DataType.INTEGER, autoIncrement: true })
  declare id: number;

  @Unique
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID })
  planId: string;

  @Default(DataType.NOW)
  @Column({ type: DataType.DATE })
  timelimited: Date;

  @Column({ type: DataType.STRING(255), allowNull: false })
  highlightText: string;

  @Column({ type: DataType.STRING(5) })
  currencyCode: string;

  @Column({ type: DataType.STRING(255) })
  title: string;

  @Column({ type: DataType.TEXT })
  desc: string;

  @Column({ type: DataType.STRING(8) })
  payment: string;

  @Default(false)
  @Column({ type: DataType.BOOLEAN })
  status: boolean;

  @Column({ type: DataType.STRING(8) })
  discount: string;

  @Column({ type: DataType.STRING(5) })
  countryCode: string;
}
