import {
  documentsServiceConfig,
  universityServiceConfig,
} from '@configs/services';
import { JwtStrategy } from '@guards/jwt.strategy';
import { ModulesModule } from '@modules/modules.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RelationsEntitiesModule } from '@relations-entities/relations-entities.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ClientsModule.register([universityServiceConfig, documentsServiceConfig]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
    ModulesModule,
    RelationsEntitiesModule,
  ],
})
export class AppModule {}
