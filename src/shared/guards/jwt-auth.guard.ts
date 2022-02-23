import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  // constructor(private jwtService: JwtService) {
  //   super();
  // }
  // canActivate(
  //   context: ExecutionContext,
  // ): boolean | Promise<boolean> | Observable<boolean> {
  //   const token: string = context.switchToHttp().getRequest()
  //     .headers.authorization;
  //   console.log('RolesGuard token ---', token?.slice(6));
  //   console.log(
  //     'RolesGuard decoded ---',
  //     this.jwtService.decode(token?.slice(6)),
  //   );
  //   return true;
  // }
}
