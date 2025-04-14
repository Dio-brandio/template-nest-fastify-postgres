import {
  Catch,
  ExceptionFilter,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { ZodError } from 'zod';

@Catch(HttpException)
export class ExceptionHandler implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    let message = exception.message;
    if (exception instanceof ZodError) {
      message = (exception as any)?.response?.message?.join(', ');
    }
    response.status(status).json({
      status,
      data: null,
      message,
    });
  }
}
