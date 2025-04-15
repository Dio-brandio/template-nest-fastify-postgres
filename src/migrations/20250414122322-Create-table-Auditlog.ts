import { DataTypes, QueryInterface } from 'sequelize';
import { DataType } from 'sequelize-typescript';

export const up = async ({ context }: { context: QueryInterface }) => {
  await context.createTable('audit_logs', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    ip: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    method: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    requestBody: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: null,
    },
    responseBody: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
    },
    statusCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    duration: {
      type: DataType.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    module: {
      type: DataType.STRING(10),
      allowNull: true,
      defaultValue: null,
    },
    newValues: {
      type: DataType.JSON,
      allowNull: true,
      defaultValue: null,
    },
    oldValues: {
      type: DataType.JSON,
      allowNull: true,
      defaultValue: null,
    },
    createdAt: {
      type: DataType.DATE,
      allowNull: true,
      defaultValue: DataType.NOW
    }
  });
};

export const down = async ({ context }: { context: QueryInterface }) => { };
