const moment = require('moment');
const { registerSale, registerProducts } = require('../models/checkoutModel');

const checkoutService = async ({
  user_id,
  price,
  address,
  number,
  status,
  products,
}) => {
  const dateNow = moment().format('YYYY-MM-DD H:mm:ss');
  const dadosVenda = {
    user_id,
    total_price: price,
    delivery_address: address,
    delivery_number: number,
    sale_date: dateNow,
    status,
  };

  const verificaUndefined = Object.entries(dadosVenda).some(
    (product) => product[1] === undefined || product[1] === '',
  );
  if (verificaUndefined || !products) {
    return {
      message: 'Faltam informações',
      order: 'user_id, price, address, number, status, products',
    };
  }
  try {
    const productsObject = JSON.parse(products);
    console.log('Antes', productsObject);
    const registrarVenda = await registerSale(dadosVenda);
    productsObject.map((product) => {
      const novoProduto = product;
      novoProduto.sale_id = registrarVenda;
      return productsObject;
    });
    console.log('Depois', productsObject);
    productsObject.forEach((product) => registerProducts(product));
  } catch (error) {
    return error;
  }
};

module.exports = checkoutService;
