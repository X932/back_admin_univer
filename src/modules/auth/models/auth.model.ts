import { HttpException } from '@nestjs/common';

export interface ISuccessSignUp {
  userId: number;
  message: string;
}

export type SignUpResponse = ISuccessSignUp | HttpException;

interface ISuccessSignIn {
  message: string;
  token: string;
}

export type SignInResponse = ISuccessSignIn | HttpException;
