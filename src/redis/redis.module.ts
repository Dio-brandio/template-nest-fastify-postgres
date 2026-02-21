import { REDIS_CONNECTION_STRING } from '@constants';
import { Global, Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import { redisConnection } from './redis.connection';

@Global()
@Module({
  providers: [
    {
      provide: REDIS_CONNECTION_STRING,
      useFactory: () => {
        return redisConnection;
      },
    },
    RedisService,
  ],
  exports: [REDIS_CONNECTION_STRING, RedisService],
})
export class RedisModule {}
