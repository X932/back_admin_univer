import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RolesEntity } from '@modules/roles/entities/roles.entity';

@Entity('users_roles')
export class UsersRolesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id' })
  user: number;

  @ManyToOne(() => RolesEntity, (role) => role.usersRoles)
  @JoinColumn({ name: 'role_id' })
  role: RolesEntity;
}
