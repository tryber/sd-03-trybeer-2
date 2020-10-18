const { registerSale, registerProducts } = require('../models/checkoutModel');
const dateNow = require('../utils/dateNow');

const checkoutService = async ({
  user_id,
  total_price,
  delivery_address,
  delivery_number,
  products,
  status = 'Pendente',
}) => {
  const dadosVenda = {
    user_id,
    total_price: total_price.replace(',', '.'),
    delivery_address,
    delivery_number,
    sale_date: dateNow,
    status,
  };
  try {
    const productsObject = products;
    const registrarVenda = await registerSale(dadosVenda);
    products.map((product) => {
      const novoProduto = product;
      novoProduto.sale_id = registrarVenda;
      registerProducts(novoProduto);
      return productsObject;
    });
  } catch (error) {
    return error;
  }
};

module.exports = checkoutService;
