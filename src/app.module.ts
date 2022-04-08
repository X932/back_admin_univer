import {
  documentsServiceConfig,
  universityServiceConfig,
} from '@configs/services';
import { JWT_KEY } from '@constants/jwt-key';
import { JwtStrategy } from '@guards/jwt.strategy';
import { AuthService } from '@modules/auth/auth.service';
import { ModulesModule } from '@modules/modules.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { ClientsModule } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RelationsEntitiesModule } from '@relations-entities/relations-entities.module';
import { UsersRolesEntity } from '@relations-entities/users-roles.relation';
import { AppController } from './app.controller';

@Module({
  controllers: [AppController],
  providers: [JwtStrategy, AuthService],
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ClientsModule.register([universityServiceConfig, documentsServiceConfig]),
    JwtModule.register({ secret: JWT_KEY, signOptions: { expiresIn: '1d' } }),
    TypeOrmModule.forFeature([UsersRolesEntity]),
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
