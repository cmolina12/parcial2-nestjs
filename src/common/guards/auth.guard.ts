import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = request.headers['authorization'];
    const validToken = 'admin-secret-token';
    if (token !== validToken) {
      throw new ForbiddenException('Invalid or missing token');
    }
    return true;
  }
}
