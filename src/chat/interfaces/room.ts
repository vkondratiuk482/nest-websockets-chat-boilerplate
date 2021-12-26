import { User } from './user';

export interface Room {
  id: string;
  name: string;
  userLimit: number;
  currentUsers: Array<User>;
}
