import { Module } from '@nestjs/common';
import { JwtStrategy } from '@guards/jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRolesEntity } from '@relations-entities/users-roles.relation';
import { JwtModule } from '@nestjs/jwt';
import { JWT_KEY } from '@constants/jwt-key';
import { ClientsModule } from '@nestjs/microservices';
import { universityServiceConfig } from '@configs/services';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  imports: [
    TypeOrmModule.forFeature([UsersRolesEntity]),
    ClientsModule.register([universityServiceConfig]),
    JwtModule.register({ secret: JWT_KEY, signOptions: { expiresIn: '1d' } }),
  ],
  providers: [JwtStrategy, AuthService],
})
export class AuthModule {}
