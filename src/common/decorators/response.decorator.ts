// plugins/response.decorator.ts
import { Messages } from '@constants';
import { HttpStatus } from '@nestjs/common';
import { FastifyPluginAsync } from 'fastify';

const responseDecorator = async (fastify) => {
  fastify.decorateReply('ok', function(data: any = null, message = Messages.successMessage) {
    return this.code(HttpStatus.OK).send({
      message,
      data,
    });
  });

  fastify.decorateReply('created', function(data: any = null, message = Messages.recordCreatedSuccessfully) {
    return this.code(HttpStatus.CREATED).send({
      message,
      data,
    })
  });


  fastify.decorateReply('badRequest', function(message = 'Bad request', data: any = null) {
    return this.code(400).send({
      status: 'error',
      message,
      data,
    });
  });

  fastify.decorateReply('notSufficientPermission', function(message = 'Not sufficient permission', data: any = null) {
    return this.code(403).send({
      status: 'error',
      message,
      data,
    });
  });
  fastify.decorateReply('error', function(message = Messages.internalServerError, data: any = null) {
    return this.code(HttpStatus.INTERNAL_SERVER_ERROR).send({
      message,
      data,
    });
  });

  fastify.decorateReply('custom', function(statusCode: number = HttpStatus.OK, message = Messages.successMessage, data: any = null) {
    return this.code(statusCode).send({
      message,
      data,
    });
  });
  // Add more methods if needed
};

export { responseDecorator };

