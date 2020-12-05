const bcrypt = require('bcrypt');

const auth = require('../../../auth')
const TABLA = 'auth';


module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require('../../../store/dummy');
  }

  async function login(username, password) {
    const data = await store.query(TABLA, { username: username })

    return bcrypt.compare(password, data.password)
      .then(equals => {
        if (equals === true) {
          //token
          return auth.sign(data)
        } else {
          throw new Error('Invalid data.')
        }
      })
  };

  async function upsert(data) {
    const authData = {
      id: data.id,
    }
    if (data.username) {
      authData.username = data.username;
    }
    if (data.password) {
      authData.password = await bcrypt.hash(data.password, 10);
    }
    if (data.name) {
      authData.name = data.name;
    }
    return store.upsert(TABLA, authData)
  }
  return {
    upsert,
    login
  }
};