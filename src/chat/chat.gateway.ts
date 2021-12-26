import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { Socket } from 'socket.io';

import { Room } from './interfaces/room';
import { User } from './interfaces/user';

@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server;

  private rooms: Map<string, Room> = new Map();

  handleConnection(socket: Socket): void {}

  handleDisconnect(socket: Socket): void {}
}
