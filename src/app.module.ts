import {
  documentsServiceConfig,
  universityServiceConfig,
} from '@configs/services';
import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ClientsModule.register([universityServiceConfig, documentsServiceConfig]),
  ],
})
export class AppModule {}
