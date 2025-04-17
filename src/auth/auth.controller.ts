import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ZodValidationPipe } from '@pipes';
import { loginSchema, LoginDTO } from '@validators';
import { handleError, setAuditParams } from '@utils';
import { FastifyReply, FastifyRequest } from 'fastify';
import { RedisService } from 'src/redis/redis.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly redisService: RedisService,
  ) {}

  @Post('login')
  async login(
    @Res() res: FastifyReply,
    @Req() req: FastifyRequest,
    @Body(new ZodValidationPipe(loginSchema)) loginData: LoginDTO,
  ) {
    try {
      const oldValues = {
        name: 'Alice',
        roles: ['user'],
        location: { city: 'New York' },
      };
      const newValues = {
        name: 'Alicia',
        roles: ['user', 'admin'],
        location: { city: 'Los Angeles' },
        email: 'alicia@example.com',
      };

      setAuditParams(req, { oldValues, newValues });
      res.ok(loginData);
    } catch (error) {
      handleError(res, error);
    }
  }

  @Get('login')
  async login2(
    @Res() res: FastifyReply,
    @Body(new ZodValidationPipe(loginSchema)) loginData: LoginDTO,
  ) {
    try {
      res.ok(loginData);
    } catch (error) {
      handleError(res, error);
    }
  }
}
