const connection = require('./connection');
var mysql = require('mysql');
var newConn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'Trybeer',
});

// had to declare both varibles bellow because eslint was
// complaining about varibles with no cameCase
const saleDate = 'sale_date';
const totalPrice = 'total_price';

const getAllById = async (userId) =>
  connection()
    .then((db) =>
      db
        .getTable('sales')
        .select('id', saleDate, totalPrice)
        .bind('userId', userId)
        .where('user_id = :userId')
        .execute(),
    )
    .then((response) => response.fetchAll())
    .then((result) =>
      result.map(
        ([id, sale_date = 'saleDate', total_price = 'totalPrice']) => ({
          id,
          sale_date,
          total_price,
        }),
      ),
    );

const getProducts = () =>
  connection()
    .then((db) =>
      db.getTable('products').select('id', 'name', 'price').execute(),
    )
    .then((response) => response.fetchAll())
    .then((result) =>
      result.map(([id, name, price]) => ({
        id,
        name,
        price,
      })),
    );


const getSalesJoinProducts = async (userId) => {
  newConn.connect();
  const finalObject = [];
  const venda = await newConn.query(
    `SELECT user_id, id, total_price FROM sales;`,
    (error, results, fields) => {
      if (error)
        throw error;
      var resultArray = Object.values(JSON.parse(JSON.stringify(results[0])));
      finalObject.push(...resultArray);
    }
  );
  return venda;
};

const getSalesProducts = (saleId) =>
  connection()
    .then((db) =>
      db
        .getTable('sales_products')
        .select('sale_id', 'product_id', 'quantity')
        .bind('saleId', saleId)
        .where('sale_id = :saleId')
        .execute(),
    )
    .then((response) => response.fetchAll())
    .then((result) =>
      result.map(([sale_id, product_id, quantity]) => ({
        sale_id,
        product_id,
        quantity,
      })),
    );

const getByOrderId = async (orderId, userId) =>
  connection()
    .then((db) =>
      db
        .getTable('sales')
        .select('id', saleDate, totalPrice)
        .bind('orderId', orderId)
        .bind('userId', userId)
        .where('id = :orderId AND user_id = :userId')
        .execute(),
    )
    .then((response) => response.fetchAll())
    .then((result) =>
      result.filter(
        ([id, sale_date = 'saleDate', total_price = 'totalPrice']) => ({
          id,
          sale_date,
          total_price,
        }),
      ),
    );

module.exports = {
  getAllById,
  getByOrderId,
  getProducts,
  getSalesProducts,
  getSalesJoinProducts,
};
