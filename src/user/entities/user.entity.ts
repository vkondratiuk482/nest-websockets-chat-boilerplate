import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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

  @Column({ nullable: true })
  refreshToken: string;
}
