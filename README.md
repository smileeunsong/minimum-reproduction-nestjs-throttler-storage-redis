This is for minimum reproduction for nestjs-throttler-storage-redis.

https://github.com/kkoomen/nestjs-throttler-storage-redis/issues/1480

Redis storage does not apply in forRootAsync using useFactory.
```javascript
ThrottlerModule.forRootAsync({
  useFactory: async () => [
    {
      ttl: 1000,
      limit: 1,
      storage: new ThrottlerStorageRedisService(new Redis()),
    },
  ],
})
```
