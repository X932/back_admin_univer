import { Body, Controller, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthRoutes } from './auth.routes';
import { AuthService } from './auth.service';
import { SignUpUserDto } from './models/auth.dto';
import { SignUpResponse } from './models/auth.model';

@Controller(AuthRoutes.Main)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post(AuthRoutes.SignUp)
  signUp(@Body() user: SignUpUserDto): Observable<SignUpResponse> {
    return this.authService.signUp(user);
  }
}
