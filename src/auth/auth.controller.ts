import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ZodValidationPipe } from '@pipes';
import { loginSchema, LoginDTO } from '@validators';
import { handleError } from '@utils';
import { FastifyReply } from 'fastify';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  async login(
    @Res() res: FastifyReply,
    @Body(new ZodValidationPipe(loginSchema)) loginData: LoginDTO
  ) {
    try {
      res.ok(loginData)
    } catch (error) {
      handleError(res, error)
    }
  }
}
