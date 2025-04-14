import {
  Model,
  Column,
  CreatedAt,
  DataType,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({
  tableName: 'users',
  timestamps: true,
})
export class User extends Model<User> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
    primaryKey: true,
  })
  declare id: string;

  @CreatedAt
  @Column({
    type: DataType.DATE,
    defaultValue: null,
    allowNull: true,
  })
  declare createdAt: Date;

  @UpdatedAt
  @Column({
    type: DataType.DATE,
    defaultValue: null,
    allowNull: true,
  })
  declare updatedAt?: Date;
}
