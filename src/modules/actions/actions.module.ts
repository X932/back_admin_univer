import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActionsEntity } from './entities/actions.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ActionsEntity])],
})
export class ActionsModule {}
