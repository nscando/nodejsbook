module.exports = {
     api: {
          port: process.env.API_PORT || 3000
     },
     jwt: {
          secret: process.env.JWT_SECRET || 'notesecret'
     },
     mysql: {
          host: process.env.MYSQL_HOST || 'remotemysql.com',
          user: process.env.MYSQL_USER || '',
          password: process.env.MYSQL_PASS || '',
          database: process.env.MYSQL_DB || '',

     }
};
