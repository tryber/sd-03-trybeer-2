import React, { useEffect, useContext } from 'react';
<<<<<<< HEAD

=======
>>>>>>> 6c0cc51237327fffda538a57e89d01e5665e7cbe
import { useHistory } from 'react-router-dom';
import { ContextAplication } from '../../Context';
import JwtDecode from '../../Services/JwtDecode';
import ButtonMinus from './ButtonMinus';
import ButtonPlus from './ButtonPlus';
import ButtonViewCart from './ButtonViewCart';

const quantityCartProduct = (e, cart) => cart.filter(({ name }) => name === e)
  .map(({ name }) => name).length;

const createCardsMenuOptions = (products, cart) => (
  products.map(({ name, price, image }, idx) => (
    <div key={ `${idx + 1}` }>
      <p data-testid={ `${idx}-product-price` }>{ price.toString().replace('.', ',') }</p>
      <img src={ image } alt="Imagen do produto" data-testid={ `${idx}-product-img` } width="50px" />
      <h3 data-testid={ `${idx}-product-name` }>{ name }</h3>
      <ButtonPlus idx={ idx } name={ name } />
      <ButtonMinus idx={ idx } name={ name } />
      <h3 data-testid={ `${idx}-product-qtd` }>{ quantityCartProduct(name, cart) }</h3>
    </div>
  ))
);

const ClientProducs = () => {
  const { showProducts, cart } = useContext(ContextAplication);
  const history = useHistory();

  useEffect(() => {
    const JWT = JwtDecode();
    if (JWT.role === 'administrator') return history.push('/admin/orders');
    return null;
  }, [history]);

  return (
    <div>
      <h2>Cliente - Produtos</h2>
      {createCardsMenuOptions(showProducts, cart)}
      <ButtonViewCart />
    </div>
  );
};

export default ClientProducs;
