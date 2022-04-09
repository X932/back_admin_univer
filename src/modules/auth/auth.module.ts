import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { universityServiceConfig } from '@configs/services';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  imports: [ClientsModule.register([universityServiceConfig])],
  providers: [AuthService],
})
export class AuthModule {}
