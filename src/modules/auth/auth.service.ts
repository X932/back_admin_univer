import { ServisesNames } from '@configs/services';
import { HttpException, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClientProxy } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRolesEntity } from '@relations-entities/users-roles.relation';
import { catchError, from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { MessagePatterns } from 'types-univer';
import { SignUpUserDto } from './models/auth.dto';
import { SignUpResponse } from './models/auth.model';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRolesEntity)
    private usersRolesRepository: Repository<UsersRolesEntity>,
    private jwtService: JwtService,
    @Inject(ServisesNames.UNIVERSITY) private clientUniversity: ClientProxy,
  ) {}
  public log(userId: number): Observable<UsersRolesEntity> {
    return from(
      this.usersRolesRepository.findOne({
        relations: ['role'],
        where: { userId },
      }),
    );
  }

  public parseToken(token: string) {
    return this.jwtService.verify(token);
  }

  public signUp(user: SignUpUserDto): Observable<SignUpResponse> {
    return this.clientUniversity
      .send(MessagePatterns.Auth.signUp, user)
      .pipe<SignUpResponse>(
        catchError((error) => {
          throw new HttpException({ message: error.message }, error.code);
        }),
      );
  }
}
