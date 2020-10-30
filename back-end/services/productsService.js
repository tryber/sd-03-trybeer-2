const products = require('../models/products');

const getProduct = async () => products.getProduct();

module.exports = { getProduct };
