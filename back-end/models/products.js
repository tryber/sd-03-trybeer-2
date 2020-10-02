const connection = require('./connection');

const getProduct = async () => connection()
  .then((db) => db.getTable('products')
    .select('id', 'name', 'price', 'url_image')
    .execute())
  .then((response) => response.fetchAll())
  .then((result) => result.map(([id, name, price, urlImage]) => ({ id, name, price, urlImage })));

module.exports = { getProduct };
