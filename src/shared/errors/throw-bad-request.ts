import { ResponseStatuses } from '@constants/response-statuses';
import { HttpException } from '@nestjs/common';

export function throwBadRequest(message: string): void {
  throw new HttpException({ message }, ResponseStatuses.BAD_REQUEST.code);
}
