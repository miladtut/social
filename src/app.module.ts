import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { MobileModule } from './mobile/mobile.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './common/entities/user.entity';
import { Room } from './common/entities/room.entity';
import { ConfigModule } from '@nestjs/config';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // لجعل ConfigModule متاح في جميع أنحاء التطبيق بدون الحاجة إلى استيراده في كل وحدة.
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASS,
      database: process.env.DATABASE_NAME,
      entities: [
        User,
        Room
      ],
      synchronize: true,
    }),
    AdminModule, 
    MobileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
