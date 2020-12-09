module.exports = {
     remoteDB: process.env.REMOTE_DB || '',
     api: {
          port: process.env.API_PORT || ''
     },
     post: {
          port: process.env.POST_PORT || ''
     },
     jwt: {
          secret: process.env.JWT_SECRET || ''
     },
     mysql: {
          host: process.env.MYSQL_HOST || '',
          user: process.env.MYSQL_USER || '',
          password: process.env.MYSQL_PASS || '',
          database: process.env.MYSQL_DB || '',

     },
     mysqlService: {
          host: process.env.MYSQL_SRV_HOST || '',
          port: process.env.MYSQL_SRV_PORT || '',
     },
     cacheService: {
          host: process.env.CACHE_SRV_HOST || 'localhost',
          port: process.env.CACHE_SRV_PORT || 3003,
     },
     redis: {
          host: process.env.REDIS_HOST || 'redis-10301.c14.us-east-1-2.ec2.cloud.redislabs.com',
          port: process.env.REDIS_PORT || '10301',
          password: process.env.REDIS_PASS || 'Ad1mtyYLNz8UIH0BNDGj1WJxz4ltXEI0'
     }

};