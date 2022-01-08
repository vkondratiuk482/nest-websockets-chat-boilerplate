import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinTable,
} from 'typeorm';

import { Room } from 'src/room/entities/room.entity';

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
}
