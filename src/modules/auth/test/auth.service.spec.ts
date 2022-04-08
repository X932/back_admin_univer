import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ClientsModule } from '@nestjs/microservices';
import { JwtModule } from '@nestjs/jwt';
import { JWT_KEY } from '@constants/jwt-key';
import { universityServiceConfig } from '@configs/services';
import { UsersRolesEntity } from '@relations-entities/users-roles.relation';
import {
  InvalidUserDataResponse,
  InvalidUserDepartmentResponse,
  InvalidUserGroupResponse,
  signUpRequestStub,
  successSignUpResponse,
} from './stubs/sign-up.stub';
import { AuthService } from '../auth.service';

describe('auth service', () => {
  let authService: AuthService;

  const mockedUsersRolesRepo = {
    findOne: jest.fn(() => Promise.resolve(successSignUpResponse())),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: getRepositoryToken(UsersRolesEntity),
          useValue: mockedUsersRolesRepo,
        },
      ],
      imports: [
        ClientsModule.register([universityServiceConfig]),
        JwtModule.register({
          secret: JWT_KEY,
          signOptions: { expiresIn: '1d' },
        }),
      ],
    }).compile();

    authService = await module.get(AuthService);
  });

  test('sign up route', (done: jest.DoneCallback) => {
    authService.signUp(signUpRequestStub()).subscribe({
      error: (error) => {
        expect([
          InvalidUserDataResponse(),
          successSignUpResponse(),
          InvalidUserGroupResponse(),
          InvalidUserDepartmentResponse(),
        ]).toContainEqual(error);
        done();
      },
      next: (response) => {
        expect(response).toStrictEqual(successSignUpResponse());
        done();
      },
    });
  });
});
