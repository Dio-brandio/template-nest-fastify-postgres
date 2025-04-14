import { ActiveUserGuard, AuthGuard } from '@guards';
import { applyDecorators, UseGuards } from '@nestjs/common';

export function Authenticate() {
  return applyDecorators(UseGuards(AuthGuard, ActiveUserGuard));
}
