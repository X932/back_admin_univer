import { JwtAuthGuard } from '@guards/jwt-auth.guard';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';

@UseGuards(JwtAuthGuard)
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

  // @UseGuards(RolesGuard)
  @Get('t')
  getTest() {
    return 'works';
  }
}
