import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { JWT_KEY } from '@constants/jwt-key';
import { AuthService } from '@modules/auth/auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JWT_KEY,
    });
  }

  async validate(payload: IJWT) {
    this.authService.log(payload.sub).subscribe((observver) => {
      console.log('observver', observver);
    });
    return true;
  }
}

interface IJWT {
  sub: number;
  iat: number;
  exp: number;
}
