import { Injectable, NestMiddleware } from '@nestjs/common';
import { FastifyRequest, FastifyReply } from 'fastify';
import chalk from 'chalk';
import moment from 'moment';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: FastifyRequest, res: FastifyReply['raw'], next: () => void) {
    const { method, url } = req;
    const startTime = Date.now();

    // Log the incoming request
    console.log(chalk.blue(`[Request] ${method} ${url}`));

    // Capture the response completion using raw Node.js response
    res.on('finish', () => {
      const { statusCode } = res;
      const responseTime = Date.now() - startTime;

      // Status code color logic
      const statusColor =
        statusCode >= 500
          ? chalk.red
          : statusCode >= 400
            ? chalk.yellow
            : statusCode >= 300
              ? chalk.cyan
              : chalk.green;

      // Format timestamp
      const timestamp = moment(startTime).format('DD/MM/YYYY HH:mm:ss');

      console.log(
        statusColor(
          `[Response ${timestamp}] ${method} ${url} ${statusCode} - ${responseTime}ms\n`
        )
      );
    });

    next();
  }
}
