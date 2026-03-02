import { CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';

export class AdminGuard implements CanActivate {
  canActivate(ctx: ExecutionContext) {
    const req = ctx.switchToHttp().getRequest();
    if (req.user.role !== 'admin') {
      throw new ForbiddenException('Admins only');
    }
    return true;
  }
}