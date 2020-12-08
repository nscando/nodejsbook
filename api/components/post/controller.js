const { nanoid } = require('nanoid');
const error = require('../../../utils/error');
const COLLECTION = 'post';

module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require('../../../store/dummy');
  }

  function list(query) {
    return store.list(COLLECTION);
  }

  async function get(id) {
    const user = await store.get(COLLECTION, id);
    if (!user) {
      throw error('No existe el post', 404);
    }

    return user;
  }

  async function upsert(data, user) {
    const post = {
      id: data.id,
      user: user,
      text: data.text,
    }

    if (!post.id) {
      post.id = nanoid();
    }

    return store.upsert(COLLECTION, post).then(() => post);
  }




  return {
    list,
    get,
    upsert
  }
};
