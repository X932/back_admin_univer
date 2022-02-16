import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('u')
  getHello() {
    return this.appService.getHello();
  }

  @Get('d')
  getDocs() {
    return this.appService.getDocs();
  }

  @Get('t')
  getTest() {
    return 'works';
  }
}
