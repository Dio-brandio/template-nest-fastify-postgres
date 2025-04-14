import { AUDITTYPES, Messages } from '@constants';
import {
  createParamDecorator,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';

export const AuditDecorator = createParamDecorator(
  (auditType: string, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    const { _id } = req.body.jwtTokendata;
    if (!_id) throw new Error(Messages.unauthorizeResourse);
    if (auditType === AUDITTYPES.CREATE) {
      req.body = {
        ...req.body,
        createdBy: _id,
        updatedBy: _id,
      };
    } else if (auditType === AUDITTYPES.UPDATE) {
      req.body = {
        ...req.body,
        updatedBy: _id,
      };
    } else if (auditType === AUDITTYPES.DELETE) {
      req.body = {
        isDeleted: true,
        deletedBy: _id,
        deletedAt: new Date().toUTCString(),
      };
    } else {
      throw new ForbiddenException();
    }
    return req.body;
  },
);
