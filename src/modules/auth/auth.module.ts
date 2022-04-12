import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { universityServiceConfig } from '@configs/services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRolesEntity } from '@relations-entities/users-roles.relation';
import { RolesEntity } from '@modules/roles/entities/roles.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  controllers: [AuthController],
  imports: [
    ClientsModule.register([universityServiceConfig]),
    TypeOrmModule.forFeature([UsersRolesEntity, RolesEntity]),
  ],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
