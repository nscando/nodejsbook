const db = {
  'user': [
    {
      id: 1, name: 'Nicolas',
      id: 2, name: 'Juan'
    }
  ],
};

async function list(table) {
  return db[table]
};

async function get(table, id) {
  let collection = await lista(table)
  return collection.filter(item => item.id === id)[0] || null;
};

async function upsert(table, data) {
  db[collection].push(data);
};

async function remove(table, id) {
  return true;
};

module.exports = {
  list,
  get,
  upsert,
  remove,
}