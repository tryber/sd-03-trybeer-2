const connection = require('./connection');

const registerSale = async ({
  user_id,
  total_price,
  delivery_address,
  delivery_number,
  sale_date,
  status,
}) => connection().then((db) => db
  .getTable('sales')
  .insert([
    'user_id',
    'total_price',
    'delivery_address',
    'delivery_number',
    'sale_date',
    'status',
  ])
  .values(
    user_id,
    total_price,
    delivery_address,
    delivery_number,
    sale_date,
    status,
  )
  .execute()
  .then((res) => res.getAutoIncrementValue()));

const registerProducts = async ({ id, qnt, sale_id }) => connection().then((db) => db
  .getTable('sales_products')
  .insert(['sale_id', 'product_id', 'quantity'])
  .values(sale_id, id, qnt)
  .execute());

/**
   'user_id',
    'total_price',
    'delivery_address',
    'delivery_number',
    'sale_date',
    'status',
 */

module.exports = { registerSale, registerProducts };
