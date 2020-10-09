const connection = require('./connection');

const AdminDetail = async () => {
  const dbConnect = await connection();
  const getQuery = await dbConnect.getTable('sales')
    .select(['id', 'total_price', 'delivery_address', 'delivery_number', 'sale_date', 'status'])
    .orderBy('id')
    .execute();
  const detailOrder = getQuery.fetchAll();
  return detailOrder.map(([id, totalPrice, deliveryAddress, deliveryNumber, saleDate, status]) => (
    { id, totalPrice, deliveryAddress, deliveryNumber, saleDate, status }
  ));
};

module.exports = {
  AdminDetail,
};
