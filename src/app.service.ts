import { Injectable } from '@nestjs/common';
import { AuditlogService } from './auditlog/auditlog.service';

@Injectable()
export class AppService {
  constructor(private readonly auditLogService: AuditlogService) {}
  async getHello() {
    await this.auditLogService.createLog({
      ip: 'localhost',
      message: 'example log',
      method: 'GET',
      requestBody: {},
      responseBody: {},
      url: '/',
      userId: '0510256c-38ba-4b41-89ed-43ec428a7160',
      statusCode: 200,
    });
    return 'Hello Fastify Template With Typeorm!';
  }
}
