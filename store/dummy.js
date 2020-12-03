const db = {
     'user': [
          { id: 1, name: 'Nicolas' }
     ],
};

function list(table) {
     return db[table]
};

function get(table, id) {
     let col = lista(table)
     return col.filter(item => item.id === id)[0] || null;
};

function upsert(table, data) {
     db[collection].push(data);
};

function remove(table, id) {
     return true;
};

module.exports = {
     list,
     get,
     upsert,
     remove,
}