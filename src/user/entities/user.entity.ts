import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinTable,
  OneToMany,
  ManyToMany,
} from 'typeorm';

import { Room } from 'src/room/entities/room.entity';
import { Message } from 'src/room/entities/message.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 20 })
  username: string;

  @Column({ length: 60 })
  password: string;

  @Column()
  avatar: string;

  @Column()
  is_admin: boolean;

  @JoinTable()
  @ManyToOne(() => Room, (room: Room) => room.users)
  room: Room;

  @JoinTable()
  @ManyToMany(() => Room, (room: Room) => room.bannedUsers, { eager: true })
  bannedRooms: Array<Room>;

  @OneToMany(() => Message, (message: Message) => message.user)
  messages: Array<Message>;
}
