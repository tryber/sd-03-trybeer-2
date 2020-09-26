import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ContextAplication } from '../../Context';
import { getCart } from '../../Services';
import JwtDecode from '../../Services/JwtDecode';
import ButtonMinus from './ButtonMinus';
import ButtonPlus from './ButtonPlus';
import ButtonViewCart from './ButtonViewCart';

const quantityCartProduct = (e) => {
  const qnt = getCart('cart');
  return qnt.filter(({ name }) => name == e )
  .map(({ name }) => name).length;
}

const createCardsMenuOptions = (products) => (
  products.map(({ name, price, image }, idx) => (
    <div key={ idx }>
      <p data-testid={`${ idx }-product-price`}>{ price.toString().replace('.', ',') }</p>
      <img src={ image } alt="Imagen do produto" data-testid={`${ idx }-product-img`} width="50px"/>
      <h3 data-testid={`${ idx }-product-name`}>{ name }</h3>
      <ButtonPlus idx={ idx } />
      <ButtonMinus idx={ idx } />
      <h3 data-testid={`${ idx }-product-qtd`}>{ quantityCartProduct(name) }</h3>
    </div>
  ))
);

const ClientProducs = () => {
  const { showProducts } = useContext(ContextAplication);
  const history = useHistory();
  
  useEffect(() => {
    const JWT = JwtDecode();
    if (JWT.role === 'administrator') return history.push('/admin/orders');

  }, [history]);

  return (
    <div>
      <h2>Cliente - Produtos</h2>
      {createCardsMenuOptions(showProducts)}
      <ButtonViewCart />
    </div>
  );
};

export default ClientProducs;
