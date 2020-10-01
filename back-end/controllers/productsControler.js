const productsService = require('../services/productsService');

const productsControler = async (req, res) => {
  try {
    const products = await productsService.getProduct();
    return res.status(200).json(products);
  } catch (err) {
    return err;
  }
}

module.exports = productsControler;
