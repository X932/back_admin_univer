import { HttpException } from '@nestjs/common';

export type SignUpResponse = { message: string } | HttpException;
