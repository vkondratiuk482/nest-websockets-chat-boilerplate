import { Room } from './room';

export interface User {
  id: string;
  name: string;
  currentRoom: Room | null;
}
