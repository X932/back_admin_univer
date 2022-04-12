import { HttpStatus } from '@nestjs/common';

export const ResponseStatuses = {
  BAD_REQUEST: {
    code: HttpStatus.BAD_REQUEST,
    description: 'Данные не верные',
  },
};
