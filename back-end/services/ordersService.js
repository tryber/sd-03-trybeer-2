// const connection = require('../models/connection');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'Trybeer',
});
const {
  getAllById,
  getByOrderId,
  getProducts,
  getSalesProducts,
  getSalesJoinProducts,
} = require('../models/getOrdersModels');
const renameProperty = require('../utils/renameObject');

const getAll = async (userId) => {
  const getAllOrders = await getAllById(userId);
  const numPedidos = getAllOrders.map((pedido) => pedido.id);
  const products = await getProducts();
  if (getAllOrders.length < 1) return false;
  let finalProducts = [...getAllOrders];
  numPedidos.forEach(async (pedido, iPedido) => {
    const salesProducts = await getSalesProducts(pedido);
    salesProducts.forEach((sale, i) => {
      const productSold = products.filter(
        (product) => product.id === sale.product_id,
      );
      const saleId = salesProducts.filter(
        (sale) => sale.product_id === productSold[0].id,
      );
      productSold[0].total = parseFloat(
        productSold[0].price * saleId[0].quantity,
      );
      productSold[0].saleId = pedido;
      if (productSold[0].saleId === getAllOrders[iPedido].id) {
        getAllOrders[iPedido].cart = productSold;
        finalProducts.push(getAllOrders);
      }
    });
  });
  return finalProducts;
  // console.log('getAllOrders', getAllOrders);
  // finalProducts.push(getAllOrders, test);
  // return getAllOrders;
};

const getOne = async (orderId, userId) => {
  try {
    const getOrders = await getByOrderId(orderId, userId);
    const getOrdersObject = Object.assign({}, ...getOrders);
    const names = ['id', 'date', 'price'];
    Object.entries(getOrdersObject).forEach((_item, i) =>
      renameProperty(getOrdersObject, i, names[i]),
    );
    if (getOrders.length > 0) return getOrdersObject;
    return false;
  } catch (error) {
    return error;
  }
};

module.exports = { getAll, getOne };
