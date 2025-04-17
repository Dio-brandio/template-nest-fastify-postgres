import { HttpStatus } from '@nestjs/common';
import { FastifyReply } from 'fastify';
import { Transaction } from 'sequelize';
export async function handleError(
  res: FastifyReply,
  error: any,
  transaction?: Transaction,
) {
  let message = [error.message];
  if (error.name === 'ValidationError') {
    message = Object.values(error.errors).map((err: any) => err.message || err);
  } else if (
    error.code === 'ERR_OSSL_BAD_DECRYPT' ||
    error.code === 'ERR_INVALID_ARG_VALUE'
  ) {
    error.status = HttpStatus.BAD_REQUEST;
  }
  if (transaction) {
    await transaction.rollback();
  }
  res.custom(
    error.status ?? HttpStatus.INTERNAL_SERVER_ERROR,
    message.join(', '),
    error?.data,
  );
}
