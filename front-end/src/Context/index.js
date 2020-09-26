import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import skol from '../assets/Beers/Skol 269ml.jpg'
import skol1 from '../assets/Beers/Skol 269ml.jpg'
import skol2 from '../assets/Beers/Skol 269ml.jpg'
import { getCart } from '../Services';

export const ContextAplication = createContext();

const infoUser = { email: '', password: '' };

const products = [
  {
    name: 'Skol Lata 250ml',
    price: 'R$ 2.20',
    image: skol,
    quantity: 0,
  },
  {
    name: 'Heineken 600ml',
    price: 'R$ 7.50',
    image: skol1,
    quantity: 0,
  },
  {
    name: 'Antarctica Pilsen 300ml',
    price: 'R$ 2.49',
    image: skol2,
    quantity: 0,
  },
]

const AplicationProvider = ({ children }) => {
  const [user, setUser] = useState(infoUser);
  const [disableButton, setDisableButton] = useState(true);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('client');
  const [showProducts, setShowProducts] = useState(products);
  const [cart, setCart] = useState(getCart('cart') || [])

  const context = {
    disableButton,
    setDisableButton,
    user,
    setUser,
    name,
    setName,
    password,
    setPassword,
    email,
    setEmail,
    role,
    setRole,
    showProducts,
    setShowProducts,
    cart,
    setCart,
  };

  return (
    <div>
      <ContextAplication.Provider value={ context }>
        {children}
      </ContextAplication.Provider>
    </div>
  );
};

AplicationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AplicationProvider;
