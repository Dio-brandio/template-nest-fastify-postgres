import { Messages } from '@constants';
import { IAuditFields, ICurrentUser } from '@dtos';
import { HttpStatus } from '@nestjs/common';

declare module 'fastify' {
  interface FastifyRequest {
    storedFiles: Record<string, Storage.MultipartFile[]>;
    currentUser?: ICurrentUser;
    audit?: IAuditFields;
  }
  interface FastifyReply {
    ok: (data?: any, message?: string) => FastifyReply;
    created: (data?: any, message?: string) => FastifyReply;
    updated: (data?: any, message?: string) => FastifyReply;
    deleted: (data?: any, message?: string) => FastifyReply;
    badRequest: (message?: string, data?: any) => FastifyReply;
    notSufficientPermission: (message?: string, data?: any) => FastifyReply;
    error: (message?: string, data?: any) => FastifyReply;
    custom: (
      statusCode: number = HttpStatus.OK,
      message = Messages.successMessage,
      data: any = null,
    ) => FastifyReply;
  }
}
