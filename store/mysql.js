const mysql = require('mysql');

const config = require('../config');

const dbconf = {
     host: config.mysql.host,
     user: config.mysql.user,
     password: config.mysql.password,
     database: config.mysql.database,
};

let connection;

function handleCon() {
     connection = mysql.createConnection(dbconf);

     connection.connect((err) => {
          if (err) {
               console.error('[db err]', err);
               setTimeout(handleCon, 2000);
          } else {
               console.log('DB Connected!');
          }
     });

     connection.on('error', err => {
          console.error('[db err]', err);
          if (err.code === 'PROTOCOL_CONNECTION_LOST') {
               handleCon();
          } else {
               throw err;
          }
     })
}

handleCon();

const list = async (table) => new Promise((resolve, reject) => {
     connection.query(`SELECT * FROM ${table}`, (error, data) => {
          if (error) { return reject(error) }
          resolve(data)
     })
})

const get = async (table, where, join = '') => new Promise((resolve, reject) => {
     console.log('table', table)
     console.log('where', where)
     console.log('join', join)
     let joinQuery = ''
     if (join) {
          join.forEach((element, i) => {
               const key = Object.keys(element)[0]
               const val = element[key]
               joinQuery += ` JOIN ${key} ON ${table}.${val} = ${key}.id`
          })
     }
     console.log('table', table)
     console.log('joinQuery', joinQuery)
     console.log('where', where)

     connection.query(`SELECT * FROM ${table} ${joinQuery} WHERE ${'? AND '.repeat(where.length)} 1`, where, (error, data) => {
          if (error) { return reject(error) }
          console.log(data)
          resolve(data)
     })
})

const insert = (table, data) => new Promise((resolve, reject) => {
     connection.query(`INSERT INTO ${table} SET ?`, data, (err, result) => {
          if (err) return reject(err)
          resolve(result)
     })
})

const upsert = async (table, payload) => new Promise((resolve, reject) => {
     connection.query(`INSERT INTO ${table} SET ? ON DUPLICATE KEY UPDATE ?`, [payload, payload], (error, data) => {
          if (error) { return reject(error) }
          resolve(data)
     })
})

const remove = async (table, id) => true

function query(table, query, join) {
     let joinQuery = '';
     if (join) {
          const key = Object.keys(join)[0];
          const val = join[key];
          joinQuery = `JOIN ${key} ON ${table}.${val} = ${key}.id`;
     }

     return new Promise((resolve, reject) => {
          connection.query(`SELECT * FROM ${table} ${joinQuery} WHERE ${table}.?`, query, (err, res) => {
               if (err) return reject(err);
               resolve(res[0] || null);
          })
     })
}

module.exports = {
     list,
     get,
     upsert,
     remove,
     query,
     insert
}