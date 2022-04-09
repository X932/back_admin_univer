import { JwtAuthGuard } from '@guards/jwt-auth.guard';
import { Controller, Get, UseGuards } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @UseGuards(JwtAuthGuard)
  @Get('t')
  getTest() {
    return 'works';
  }
}
