module.exports = {
     api: {
          port: process.env.API_PORT || 3000
     },
     jwt: {
          secret: process.env.JWT_SECRET || 'notesecret'
     },
     mysql: {
          host: process.env.MYSQL_HOST || 'remotemysql.com',
          user: process.env.MYSQL_USER || 'hutFuvm9OX',
          password: process.env.MYSQL_PASS || 'vH8ucLLB4B',
          database: process.env.MYSQL_DB || 'hutFuvm9OX',

     },
     mysqlService: {
          port: process.env.MYSQL_SRV || 3001,
     }

};