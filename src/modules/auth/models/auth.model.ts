import { HttpException } from '@nestjs/common';

export type SignUpResponse = { message: string } | HttpException;

export type SignInResponse = { message: string; token: string } | HttpException;
