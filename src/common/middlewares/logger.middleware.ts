import { Injectable } from '@nestjs/common';
import { FastifyRequest, FastifyReply } from 'fastify';
import moment from 'moment';
import * as fs from 'fs';
import * as path from 'path';
import { FastifyInstance } from 'fastify/types/instance';

const logsDirName = process.env.NODE_ENV !== 'prod' ? ('logs-' + process.env.NODE_ENV) : 'logs';
const logDirectory = path.join(process.cwd(), logsDirName);
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory, { recursive: true });
}

@Injectable()
export class LoggerMiddleware {
  apply(fastify: FastifyInstance): void {
    const start = Date.now();

    fastify.addHook('onSend', (req, reply, payload, done) => {
      const duration = `${Date.now() - start}ms`;
      const logLine = `IP: ${req.ip} | ${moment().format('HH:mm:ss DD-MM-YYYY')} | ${req.method.padEnd(6)} | ${req.url} | ${reply.statusCode} | ${duration.padEnd(8)} |\n`;

      const logFile = path.join(
        logDirectory,
        `${moment().format('DD-MM-YYYY')}.log`,
      );
      fs.appendFile(logFile, logLine, (err) => {
        if (err) console.error('Failed to write log:', err);
      });

      done(null, payload);
    });
  }
}
