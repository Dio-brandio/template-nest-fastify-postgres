import { ENV } from '@config';
import { REDIS_CONNECTION_STRING } from '@constants';
import { Global, Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import Redis from 'ioredis';

export const REDIS_CONNECTION = {
  host: ENV.REDIS.REDIS_HOST,
  port: +ENV.REDIS.REDIS_PORT,
};

@Global()
@Module({
  providers: [
    {
      provide: REDIS_CONNECTION_STRING,
      useFactory: () => {
        return new Redis({
          ...REDIS_CONNECTION,
        });
      },
    },
    RedisService,
  ],
  exports: [REDIS_CONNECTION_STRING, RedisService],
})
export class RedisModule {}
