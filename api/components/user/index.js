
const config = require('../../../config.js')
let store;
if (config.remoteDB === true) {
     store = require('../../../store/remote-mysql');
} else {
     store = require('../../../store/mysql');
}



const ctrl = require('./controller');

module.exports = ctrl(store);