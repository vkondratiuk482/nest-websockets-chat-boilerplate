import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { User } from 'src/user/entities/user.entity';

@Entity()
export class Room {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 20 })
  name: string;

  @Column({ length: 60 })
  description: string;

  @Column()
  avatar: string;

  @Column('uuid')
  ownerId: string;

  @OneToMany(() => User, (user: User) => user.room)
  users: Array<User>;
}
