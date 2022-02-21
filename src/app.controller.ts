import { JwtAuthGuard } from '@guards/jwt-auth.guard';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get('u')
  getHello() {
    return this.appService.getHello();
  }

  @Get('d')
  getDocs() {
    return this.appService.getDocs();
  }

  @UseGuards(JwtAuthGuard)
  @Get('t')
  getTest() {
    return 'works';
  }
}
