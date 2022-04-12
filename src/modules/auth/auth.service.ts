import { ServisesNames } from '@configs/services';
import { RolesEntity } from '@modules/roles/entities/roles.entity';
import { HttpException, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRolesEntity } from '@relations-entities/users-roles.relation';
import { catchError, lastValueFrom, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { MessagePatterns } from 'types-univer';
import { AuthorizationDto, SignUpUserDto } from './models/auth.dto';
import {
  ISuccessSignUp,
  SignInResponse,
  SignUpResponse,
} from './models/auth.model';
import { ResponseStatuses } from '../../shared/constants/response-statuses';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRolesEntity)
    private usersRolesEntity: Repository<UsersRolesEntity>,
    @InjectRepository(RolesEntity)
    private rolesEntity: Repository<RolesEntity>,
    @Inject(ServisesNames.UNIVERSITY)
    private clientUniversity: ClientProxy,
  ) {}

  private async setUserRole(role: RolesEntity, userId: number): Promise<void> {
    const userRole = new UsersRolesEntity();
    userRole.userId = userId;
    userRole.role = role;
    await this.usersRolesEntity.save(userRole);
  }

  private async getRole(roleId: number): Promise<RolesEntity> {
    const roleEntity = await this.rolesEntity.findOne(roleId);
    if (!roleEntity) {
      throw new HttpException(
        {
          message: ResponseStatuses.BAD_REQUEST.description,
        },
        ResponseStatuses.BAD_REQUEST.code,
      );
    }
    return roleEntity;
  }

  public async signUp(user: SignUpUserDto): Promise<{ message: string }> {
    try {
      const role: RolesEntity = await this.getRole(user.roleId);
      const response: ISuccessSignUp = (await lastValueFrom<SignUpResponse>(
        this.clientUniversity.send(MessagePatterns.Auth.signUp, user),
      )) as ISuccessSignUp;

      await this.setUserRole(role, response.userId);
      return { message: response.message };
    } catch (error) {
      throw new HttpException({ message: error.message }, error.code);
    }
  }

  public signIn(userCredentials: AuthorizationDto): Observable<SignInResponse> {
    return this.clientUniversity
      .send(MessagePatterns.Auth.signIn, userCredentials)
      .pipe<SignInResponse>(
        catchError((error) => {
          throw new HttpException({ message: error.message }, error.code);
        }),
      );
  }
}
