import {
  Catch,
  ArgumentsHost,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

interface IRpcException {
  message: string;
  statusCode: number;
}

@Catch()
export class CustomExceptionFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: HttpException | IRpcException, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();
    const responseBody = {
      message: exception.message,
    };
    const statusCode =
      exception instanceof HttpException
        ? exception.getStatus()
        : exception.statusCode;

    httpAdapter.reply(ctx.getResponse(), responseBody, statusCode);
  }
}
