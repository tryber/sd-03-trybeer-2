import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ContextAplication } from '../../Context';
import JwtDecode from '../../Services/JwtDecode';
import ButtonMinus from './ButtonMinus';
import ButtonPlus from './ButtonPlus';
import ButtonViewCart from './ButtonViewCart';
import api from '../../Services/api';
import { randomNumber } from '../../Services';

const two = 2;
const zero = 0;
const time = 5000;
const quantityCartProduct = (e, cart) => cart.filter(({ name }) => name === e)
  .map(({ qnt }) => qnt);

const createCardsMenuOptions = (products, cart) => (
  products.map(({ name, price, urlImage }, idx) => (
    <div key={ randomNumber() } className="card-products">
      <p
        data-testid={ `${idx}-product-price` }
      >
        { `R$ ${price.toFixed(two).toString().replace('.', ',')}` }
      </p>
      <img src={ urlImage } alt="Imagen do produto" data-testid={ `${idx}-product-img` } width="50px" />
      <h3 data-testid={ `${idx}-product-name` }>{ name }</h3>
      <div className="buttons-card">
        <ButtonPlus idx={ idx } />
        <ButtonMinus idx={ idx } />
      </div>
      <p data-testid={ `${idx}-product-qtd` }>
        {
        quantityCartProduct(name, cart) <= zero
          ? zero
          : quantityCartProduct(name, cart)
      }
      </p>
    </div>
  ))
);

const ClientProducs = () => {
  const { showProducts, cart, setShowProducts, finish, setFinish } = useContext(ContextAplication);
  const history = useHistory();

  useEffect(() => {
    const JWT = JwtDecode();
    if (JWT.role === 'administrator') return history.push('/admin/orders');
    api.get('/products').then(({ data }) => setShowProducts(data));
  }, [history, setShowProducts]);

  setTimeout(() => {
    setFinish(false);
  }, time);

  return (
    <div className="container-cards">
  { finish && 'Compra realizada com sucesso!' }
      <h2>Cliente - Produtos</h2>
      { showProducts && createCardsMenuOptions(showProducts, cart)}
      <ButtonViewCart />
    </div>
  );
};

export default ClientProducs;
