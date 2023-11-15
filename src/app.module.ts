import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThrottlerStorageRedisService } from 'nestjs-throttler-storage-redis';
import { Redis } from 'ioredis';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    // ThrottlerModule.forRootAsync({
    //   useFactory: async () => [
    //     {
    //       ttl: 1000,
    //       limit: 1,
    //       storage: new ThrottlerStorageRedisService(new Redis()),
    //     },
    //   ],
    // }),
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 1000,
          limit: 1,
        },
      ],
      storage: new ThrottlerStorageRedisService(new Redis()),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: ThrottlerGuard }],
})
export class AppModule {}
