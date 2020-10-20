const connection = require('./connection');

// had to declare both varibles bellow because eslint was
// complaining about varibles with no cameCase
const saleDate = 'sale_date';
const totalPrice = 'total_price';

const getAllById = async (userId) => connection()
  .then((db) => db
    .getTable('sales')
    .select('id', saleDate, totalPrice)
    .bind('userId', userId)
    .where('user_id = :userId')
    .execute())
  .then((response) => response.fetchAll() || [])
  .then((result) => result.map(([id, sale_date = 'saleDate', total_price = 'totalPrice']) => ({
    id,
    sale_date,
    total_price,
  })));

const getByOrderId = async (orderId, userId) => connection()
  .then((db) => db
    .getTable('sales')
    .select('id', saleDate, totalPrice)
    .bind('orderId', orderId)
    .bind('userId', userId)
    .where('id = :orderId AND user_id = :userId')
    .execute())
  .then((response) => response.fetchAll())
  .then((result) => result.filter(([id, sale_date = 'saleDate', total_price = 'totalPrice']) => ({
    id,
    sale_date,
    total_price,
  })));

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

const getOrderUserById = async () => connection()
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

module.exports = { getAllById, getByOrderId, getAllOrders, getOrderUserById };
