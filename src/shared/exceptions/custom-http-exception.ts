import { HttpException } from '@nestjs/common';

export class CustomHttpException extends HttpException {
  public statusCode: number;
  public message: string;

  constructor(statusCode: number, message: string) {
    super({ message }, statusCode);
    this.statusCode = statusCode;
    this.message = message;
  }
}
