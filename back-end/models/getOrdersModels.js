require('dotenv/config');
const mysql = require('mysql');
const mysqlx = require('@mysql/xdevapi');
const connection = require('./connection');

const newConn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'Trybeer',
});

// had to declare both varibles bellow because eslint was
// complaining about varibles with no cameCase
const saleDate = 'sale_date';
const totalPrice = 'total_price';

const querySalesDetails = 'SELECT P.id product_id, S.id, S.sale_date, S.total_price sale_price, (P.price * SP.quantity) individual_price, P.name, SP.sale_id, SP.quantity FROM sales S JOIN products P JOIN sales_products SP ON P.id = SP.product_id  ON SP.sale_id = S.id;';

const getAllDetails = async () => mysqlx
  .getSession({
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.HOSTNAME,
    port: 33060,
    schema: 'Trybeer',
  })
  .then((session) => session.sql(querySalesDetails).execute())
  .then((res) => res
    .fetchAll()
    .map(
      ([
        productId,
        saleId,
        timestamp,
        totalSalePrice,
        salePrice,
        name,
        orderId,
        quantity,
      ]) => ({
        productId,
        saleId,
        timestamp,
        totalSalePrice,
        salePrice,
        name,
        orderId,
        quantity,
      }),
    ));

const getAllById = async (userId) => connection()
  .then((db) => db
    .getTable('sales')
    .select('id', saleDate, totalPrice)
    .bind('userId', userId)
    .where('user_id = :userId')
    .execute())
  .then((response) => response.fetchAll())
  .then((result) => result.map(
    ([id, sale_date = 'saleDate', total_price = 'totalPrice']) => ({
      id,
      sale_date,
      total_price,
    }),
  ));

const getProducts = () => connection()
  .then((db) => db.getTable('products').select('id', 'name', 'price')
    .execute())
  .then((response) => response.fetchAll())
  .then((result) => result.map(([id, name, price]) => ({
    id,
    name,
    price,
  })));

const getSalesJoinProducts = async (_userId) => {
  newConn.connect();
  const finalObject = [];
  const venda = await newConn.query(
    'SELECT user_id, id, total_price FROM sales;',
    (error, results, _fields) => {
      if (error) throw error;
      const resultArray = Object.values(JSON.parse(JSON.stringify(results[0])));
      finalObject.push(...resultArray);
    },
  );
  return venda;
};

const getSalesProducts = (saleId) => connection()
  .then((db) => db
    .getTable('sales_products')
    .select('sale_id', 'product_id', 'quantity')
    .bind('saleId', saleId)
    .where('sale_id = :saleId')
    .execute())
  .then((response) => response.fetchAll())
  .then((result) => result.map(([saleIdP, productId, quantity]) => ({
    saleIdP,
    productId,
    quantity,
  })));

const getByOrderId = async (orderId) => connection()
  .then((db) => db
    .getTable('sales')
    .select('id', saleDate, totalPrice)
    .bind('orderId', orderId)
    .where('id = :orderId')
    .execute())
  .then((response) => response.fetchAll())
  .then((result) => result.filter(
    ([id, sale_date = 'saleDate', total_price = 'totalPrice']) => ({
      id,
      sale_date,
      total_price,
    }),
  ));

const getAllOrders = async () => connection()
  .then((db) => db
    .getTable('sales')
    .select('id', saleDate, totalPrice)
    .orderBy('id')
    .execute())
  .then((response) => response.fetchAll() || [])
  .then((result) => result.map(([id, sale_date = 'saleDate', total_price = 'totalPrice']) => ({
    id,
    sale_date,
    total_price,
  })));

module.exports = {
  getAllOrders,
  getAllById,
  getByOrderId,
  getProducts,
  getSalesProducts,
  getSalesJoinProducts,
  getAllDetails,
};
