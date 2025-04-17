import { REDIS_CONNECTION_STRING } from '@constants';
import { Inject, Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService {
  constructor(
    @Inject(REDIS_CONNECTION_STRING) private readonly redisClient: Redis,
  ) {}

  async cacheSomething(key: string, value: string) {
    await this.redisClient.set(key, value, 'EX', 3600); // Expires in 1 hour
  }

  async getCached(key: string): Promise<string | null> {
    return await this.redisClient.get(key);
  }
}
