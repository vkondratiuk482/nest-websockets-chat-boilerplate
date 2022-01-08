import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

import { Observable } from 'rxjs';

import { RequestWithUser } from '../interfaces/request-with-user.interface';

import { RoomService } from '../room.service';

@Injectable()
export class OwnershipGuard implements CanActivate {
  constructor(private readonly roomSerivce: RoomService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    return new Promise(async (resolve) => {
      try {
        const req = context.switchToHttp().getRequest<RequestWithUser>();
        const roomId = req.params.id;

        const room = await this.roomSerivce.findOne(roomId);

        if (room.ownerId === req.user.id) {
          resolve(true);
        }

        resolve(false);
      } catch (e) {}
    });
  }
}
