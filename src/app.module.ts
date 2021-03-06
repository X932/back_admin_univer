import {
  documentsServiceConfig,
  universityServiceConfig,
} from '@configs/services';
import { AuthService } from '@modules/auth/auth.service';
import { ModulesModule } from '@modules/modules.module';
import { RolesEntity } from '@modules/roles/entities/roles.entity';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RelationsEntitiesModule } from '@relations-entities/relations-entities.module';
import { UsersRolesEntity } from '@relations-entities/users-roles.relation';
import { AppController } from './app.controller';

@Module({
  controllers: [AppController],
  providers: [AuthService],
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ClientsModule.register([universityServiceConfig, documentsServiceConfig]),
    TypeOrmModule.forFeature([UsersRolesEntity, RolesEntity]),
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
