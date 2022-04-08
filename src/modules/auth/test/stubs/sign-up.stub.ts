import { SignUpUserDto } from '@modules/auth/models/auth.dto';
import { HttpException, HttpStatus } from '@nestjs/common';

export const signUpRequestStub = () => {
  const user = new SignUpUserDto();
  user.name = '';
  user.surname = '';
  user.nickname = '';
  user.password = '';
  user.departmentId = 0;
  user.groupId = 0;
  return user;
};

export const successSignUpResponse = () => {
  return { message: 'Успешно' };
};

export const InvalidUserDataResponse = () => {
  return new HttpException(
    { message: 'Данные не верные' },
    HttpStatus.BAD_REQUEST,
  );
};

export const InvalidUserGroupResponse = () => {
  return new HttpException(
    { message: 'Группа не найдена' },
    HttpStatus.BAD_REQUEST,
  );
};

export const InvalidUserDepartmentResponse = () => {
  return new HttpException(
    { message: 'Кафедра не найдена' },
    HttpStatus.BAD_REQUEST,
  );
};
