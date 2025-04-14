import { Messages } from '@constants';
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Inject,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { FastifyRequest } from 'fastify';

@Injectable()
export class ActiveUserGuard implements CanActivate {
  constructor() {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const req = context.switchToHttp().getRequest() as FastifyRequest;
      const { id } = req.currentUser;
      // const user = await this.authService.getActiveUser(id);
      // if (!user) throw new UnauthorizedException(Messages.inactiveUser);
      return true;
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }
}
