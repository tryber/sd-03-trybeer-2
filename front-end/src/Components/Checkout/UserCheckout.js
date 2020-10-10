import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ContextAplication } from '../../Context';
import { randomNumber, removeCart } from '../../Services';
import TopMenu from '../Header/TopMenu';
import api from '../../Services/api';
const zero = 0;
const two = 2;
const time = 4000;
const handleChangeInput = (name, event, input, setAddress) => {
  setAddress({ ...input, [name]: event });
};
const totalPrice = (cart) => {
  const total = cart.reduce((acc, { price, qnt }) => Number(acc + (price * qnt)), zero);
  return total;
};
const renderList = (cart) => (
  cart.map(({ name, price, qnt }, idx) => (
    <div key={ randomNumber() } className="card-checkout">
      <p data-testid={ `${idx}-product-qtd-input` }>{qnt}</p>
      <li>
        <p data-testid={ `${idx}-product-name` }>{name}</p>
        <p data-testid={ `${idx}-product-unit-price` }>{`(R$ ${price.toFixed(two).toString().replace('.', ',')} un)`}</p>
        <h2 data-testid={ `${idx}-product-total-value` }>{`R$ ${totalPrice(cart).toFixed(two).toString().replace('.', ',')}`}</h2>
      </li>
      <button
        type="submit"
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
    e.preventDefault();
    const total = totalPrice(cart).toFixed(two).toString().replace('.', ',');
    setFinish(true);
    await api.post('/checkout', {
      address, cart, total, status: 'Pendente',
    });
    return setTimeout(() => history.push('/products'), time);
  };
  useEffect(() => {
    if (
      (cart.length > zero)
      && (street.length > zero)
      && (number.length > zero)
    ) setIsDisabled(false);
    if (cart.length === zero) setIsDisabled(true);
  }, [cart, address, finish, setIsDisabled, isDisabled, street, number]);
  return (
    <div>
    { finish && <h2>Compra realizada com sucesso!</h2> }
      <form>
        <h1 data-testid="top-title"><strong>Finalizar pedido</strong></h1>
        <h1>Produtos</h1>
        <div className="list-cart">
          { cart.length
            ? renderList(cart)
            : <p>Não há produtos no carrinho</p>}
        </div>
        <h2
          data-testid="order-total-value"
        >
          {`Total: R$ ${totalPrice(cart).toFixed(two).toString().replace('.', ',')}`}
        </h2>
        <div className="form-sale">
          <p>Endereço</p>
          <label>
            Rua
            <br />
            <input
              data-testid="checkout-street-input"
              type="text"
              onChange={ ({ target }) => handleChangeInput('street', target.value, address, setAddress) }
            />
          </label>
          <label>
            Número da casa:
            <br />
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
        </div>
      </form>
    </div>
  );
};
export default UserCheckout;
