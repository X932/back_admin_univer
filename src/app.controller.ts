import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('t')
  getTest() {
    return 'works';
  }
}
