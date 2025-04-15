import { Injectable } from '@nestjs/common';
import { FastifyInstance, FastifyRequest } from 'fastify';
import { AuditlogService } from 'src/auditlog/auditlog.service';

@Injectable()
export class FastifyAuditPlugin {
  constructor(private readonly auditLogService: AuditlogService) { }

  apply(fastify: FastifyInstance): void {
    fastify.addHook('onRequest', (request: FastifyRequest, reply, done) => {
      request.audit = { ...request?.audit, startTime: Date.now(), };
      done();
    });

    fastify.addHook('onSend', (request, reply, payload, done) => {
      if (request.method === 'GET') {
        done(null, payload);
      } else {
        const startTime = request.audit?.startTime || Date.now();
        const duration = Date.now() - startTime;
        const { ip, method, url, query, body } = request;
        let responseBody = '';
        try {
          responseBody = payload.toString();
        } catch (error) {
          console.error('Failed to parse response payload:', error);
        }

        const { oldValues, newValues } = request?.audit;
        this.auditLogService.createLog({
          ip,
          method,
          url,
          requestBody: body,
          responseBody: JSON.parse(responseBody),
          statusCode: reply.statusCode,
          duration,
          userId: request?.currentUser?.id,
          message: '',
          oldValues,
          newValues
        }).catch((error) => {
          console.log("Error creating log ", error)
        })

        done(null, payload);
      }
    });
  }
}
