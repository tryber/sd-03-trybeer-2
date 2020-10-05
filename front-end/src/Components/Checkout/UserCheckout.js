import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ContextAplication } from '../../Context';
import { randomNumber, removeCart } from '../../Services';
import api from '../../Services/api';

const zero = 0;
const two = 2;

const handleChangeInput = (name, event, input, setAddress) => {
  setAddress({ ...input, [name]: event });
};

const totalPrice = (cart) => {
  const total = cart.reduce((acc, e) => Number(acc + e.price), zero);
  return total;
};

const countItem = (e, cart) => cart.filter(({ name }) => name === e)
  .map(({ name }) => name).length;

const renderList = (cart) => (
  cart.reduce((unico, item) => (unico.includes(item.name)
    ? unico
    : [...unico, item]), [])
    .map(({ name, price }, idx) => (
      <div key={ randomNumber() }>
        <p data-testid={ `${idx}-product-qtd-input` }>{ countItem(name, cart) }</p>
        <li>
          <p data-testid={ `${idx}-product-name` }>{name}</p>
          <p data-testid={ `${idx}-product-unit-price` }>{`(R$ ${price.toFixed(two).toString().replace('.', ',')} un)`}</p>
          <h2 data-testid={ `${idx}-product-total-value` }>{`R$ ${totalPrice(cart).toFixed(two).toString().replace('.', ',')}`}</h2>
        </li>
        <button
          data-testid={ `${idx}-removal-button` }
          onClick={ () => removeCart() }
        >
          -
        </button>
      </div>
    ))
);

const UserCheckout = () => {
  const {
    cart, address, setAddress, finish, setFinish,
  } = useContext(ContextAplication);
  const [isDisabled, setIsDisabled] = useState(true);
  const { street, number } = address;
  const history = useHistory();

  const finishSale = async (e) => {
    e.preventDefault()
    setFinish(true);
    // const list = { address, cart, }
    await api.post('/checkout', { address, cart, qnt: totalPrice(cart) });
    return setTimeout(() => history.push('/products'), 2000);
  };

  useEffect(() => {
    if (
      (cart.length > zero)
      && (street.length > zero)
      && (number.length > zero)
    ) setIsDisabled(false);

    if (cart.length === zero) setIsDisabled(true);
  }, [cart, address, finish, setIsDisabled, isDisabled]);

  return (
    <div>
      <form>
        <h1 data-testid="top-title">Finalizar pedido</h1>
        <h1>Produtos</h1>
        { cart.length
          ? renderList(cart)
          : <p>Não há produtos no carrinho</p>}
        <h2
          data-testid="order-total-value"
        >
          {`Total: R$ ${totalPrice(cart).toFixed(two).toString().replace('.', ',')}`}
        </h2>
        <p>Endereço</p>
        <label>
          Rua
          <input
            data-testid="checkout-street-input"
            type="text"
            onChange={ ({ target }) => handleChangeInput('street', target.value, address, setAddress) }
          />
        </label>
        <label>
          Número da casa:
          <input
            data-testid="checkout-house-number-input"
            type="text"
            onChange={ ({ target }) => handleChangeInput('number', target.value, address, setAddress) }
          />
        </label>
        <div>
          <button
            disabled={ isDisabled }
            type="submit"
            data-testid="checkout-finish-btn"
            onClick={ (e) => finishSale(e) }
          >
            Finalizar Pedido
          </button>
        </div>
      </form>
      { finish && <h2>Compra realizada com sucesso!</h2> }
    </div>
  );
};

export default UserCheckout;
