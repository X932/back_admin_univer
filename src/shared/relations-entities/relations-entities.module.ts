import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRolesEntity } from '@relations-entities/users-roles.relation';

@Module({
  imports: [TypeOrmModule.forFeature([UsersRolesEntity])],
})
export class RelationsEntitiesModule {}
