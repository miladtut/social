import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { RoomModule } from './room/room.module';
import { AdminUserModule } from './admin_user/admin_user.module';

@Module({
  controllers: [],
  providers: [],
  imports: [UserModule, RoomModule, AdminUserModule]
})
export class AdminModule {}
