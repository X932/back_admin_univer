import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UsersRolesEntity } from '@relations-entities/users-roles.relation';
import { ActionsEntity } from '@modules/actions/entities/actions.entity';

@Entity('roles')
export class RolesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany(() => UsersRolesEntity, (usersRoles) => usersRoles.role)
  usersRoles: UsersRolesEntity[];

  @ManyToMany(() => ActionsEntity, (actions) => actions.roles)
  @JoinTable({
    name: 'rights',
    joinColumn: {
      name: 'role_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'action_id',
      referencedColumnName: 'id',
    },
  })
  actions: ActionsEntity[];
}
