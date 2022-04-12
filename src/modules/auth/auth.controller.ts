import { Body, Controller, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthRoutes } from './auth.routes';
import { AuthService } from './auth.service';
import { AuthorizationDto, SignUpUserDto } from './models/auth.dto';
import { SignInResponse } from './models/auth.model';

@Controller(AuthRoutes.Main)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post(AuthRoutes.SignUp)
  signUp(@Body() user: SignUpUserDto): Promise<{ message: string }> {
    return this.authService.signUp(user);
  }

  @Post(AuthRoutes.SignIn)
  signIn(@Body() user: AuthorizationDto): Observable<SignInResponse> {
    return this.authService.signIn(user);
  }
}
