import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RolesEntity } from '@modules/roles/entities/roles.entity';

@Entity('actions')
export class ActionsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @ManyToMany(() => RolesEntity, (roles) => roles.actions)
  roles: RolesEntity[];
}
