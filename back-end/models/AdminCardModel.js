const connection = require('./connection');

const AdminCardDetail = async (saleID) =>
  connection().then((session) => session
    .sql(`
    SELECT saleProducts.sale_id, saleProducts.product_id, saleProducts.quantity, products.name, products.price
    FROM Trybeer.sales_products AS saleProducts
    INNER JOIN Trybeer.products AS products
    ON saleProducts.product_id = products.id
    WHERE saleProducts.sale_id = ${saleID};`)
    .execute())
    .then((data) => data.fetchAll())
    .then((itens) => itens.map(([saleId, productId, quantity, name, price]) => ({
      saleId, productId, quantity, name, price
    })))
    .catch((err) => { console.error(err); });

const getStatus = (statusID) =>
  connection().then((db) => db
    .getTable('sales')
    .select(['id, user_id, total_price, sale_date, status'])
    .where('id = :id')
    .bind('id', statusID)
    .execute())
    .then((getSaleId) => getSaleId.fetchAll()[0] || [])
    .then(([id, userId, totalPrice, saleDate, status]) => (
      id ? ({ id, userId, totalPrice, saleDate, status }) : null))
    .catch((err) => { console.error(err); });

module.exports = { AdminCardDetail, getStatus };
