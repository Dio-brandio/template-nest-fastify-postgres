import { ENV } from '@config';
import { Logger } from '@nestjs/common';
import { Redis } from 'ioredis';

const logger = new Logger('Redis');

const redisConnection = new Redis({
  host: ENV.REDIS.HOST,
  port: ENV.REDIS.PORT,
});

redisConnection.on('ready', () => {
  logger.log('Redis connection established successfully.');
});

redisConnection.on('error', (err) => {
  logger.error('Redis connection failed:', err);
});

export { redisConnection };
