const mysqlx = require('@mysql/xdevapi');
const connection = require('./connection');

const AdminCardDetail = async (orderId) => mysqlx
  .getSession({
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.HOSTNAME,
    port: 33060,
    schema: 'Trybeer',
  })
  .then((session) => session
    .sql(`
    SELECT s.status,s.total_price, sp.sale_id, sp.product_id, sp.quantity, pr.name, pr.price
    FROM Trybeer.sales_products AS sp
    JOIN Trybeer.products AS pr
    ON sp.product_id = pr.id
    JOIN Trybeer.sales AS s
    ON s.id = sp.sale_id
    WHERE sp.sale_id = ${orderId};
  `)
    .execute())
  .then((results) => results.fetchAll())
  .then((products) => products.map(([
    status,
    totalPrice,
    saleId,
    productId,
    quantity,
    name,
    price,
  ]) => ({
    status,
    totalPrice,
    saleId,
    productId,
    quantity,
    name,
    price,
  })))
  .catch((err) => { console.error(err); });

const getStatus = (statusID) => connection()
  .then((db) => db
    .getTable('sales')
    .select(['id, user_id, total_price, sale_date, status'])
    .where('id = :id')
    .bind('id', statusID)
    .execute())
  .then((getSaleId) => getSaleId.fetchAll()[0] || [])
  .then(([id, userId, totalPrice, saleDate, status]) => (
    id ? ({ id, userId, totalPrice, saleDate, status }) : null))
  .catch((err) => { console.error(err); });

const updateStatus = async (id) => connection()
  .then((db) => db
    .getTable('sales')
    .update()
    .set('status', 'Entregue')
    .where('id = :id')
    .bind('id', id)
    .execute())
  .catch((err) => { console.error(err); });

module.exports = { AdminCardDetail, getStatus, updateStatus };
