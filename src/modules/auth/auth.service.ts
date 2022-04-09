import { ServisesNames } from '@configs/services';
import { HttpException, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { catchError, Observable } from 'rxjs';
import { MessagePatterns } from 'types-univer';
import { AuthorizationDto, SignUpUserDto } from './models/auth.dto';
import { SignInResponse, SignUpResponse } from './models/auth.model';

@Injectable()
export class AuthService {
  constructor(
    @Inject(ServisesNames.UNIVERSITY)
    private clientUniversity: ClientProxy,
  ) {}

  public signUp(user: SignUpUserDto): Observable<SignUpResponse> {
    return this.clientUniversity
      .send(MessagePatterns.Auth.signUp, user)
      .pipe<SignUpResponse>(
        catchError((error) => {
          throw new HttpException({ message: error.message }, error.code);
        }),
      );
  }

  public signIn(userCredentials: AuthorizationDto) {
    return this.clientUniversity
      .send(MessagePatterns.Auth.signIn, userCredentials)
      .pipe<SignInResponse>(
        catchError((error) => {
          throw new HttpException({ message: error.message }, error.code);
        }),
      );
  }
}
