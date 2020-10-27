// const connection = require('../models/connection');
const { getAllDetails } = require('../models/getOrdersModels');
const {
  // getAllById,
  getByOrderId,
  // getProducts,
  // getSalesProducts,
  // getSalesJoinProducts,
} = require('../models/getOrdersModels');
const renameProperty = require('../utils/renameObject');

const getAll = async (_userId) => {
  try {
    const allDetails = await getAllDetails();
    return allDetails;
  } catch (error) {
    console.log(error);
  }
};

const getOne = async (orderId, userId) => {
  try {
    const getOrders = await getByOrderId(orderId, userId);
    const getOrdersObject = Object.assign({}, ...getOrders);
    const names = ['id', 'date', 'price'];
    const objetoParaArray = Object.entries(getOrdersObject);
    objetoParaArray.forEach((_item, i) => renameProperty(getOrdersObject, i, names[i]));
    if (getOrders.length > 0) return getOrdersObject;
    return false;
  } catch (error) {
    return error;
  }
};

module.exports = { getAll, getOne };

/**
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
        // finalProducts.push(getAllOrders);
      }
      console.log(getAllOrders);
    });
  });
  return getAllOrders;
  // console.log('getAllOrders', getAllOrders);
  // finalProducts.push(getAllOrders, test);
  // return getAllOrders;
 */
