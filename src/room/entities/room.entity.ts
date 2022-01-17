import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
} from 'typeorm';

import { User } from 'src/user/entities/user.entity';
import { Message } from './message.entity';

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

  @ManyToMany(() => User, (user: User) => user.bannedRooms)
  bannedUsers: Array<User>;

  @OneToMany(() => Message, (message: Message) => message.room)
  messages: Array<Message>;
}
