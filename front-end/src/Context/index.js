import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { getCart } from '../Services';

export const ContextAplication = createContext();

const infoUser = { email: '', password: '' };

const addressUser = { street: '', number: '' };

const dateUser = {
  name: '',
  email: '',
  password: '',
  role: 'client',
};

const AplicationProvider = ({ children }) => {
  const [user, setUser] = useState(infoUser);
  const [disableButton, setDisableButton] = useState(true);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState(false);
  const [registerUser, setregisterUser] = useState(dateUser);
  const [showProducts, setShowProducts] = useState();
  const [cart, setCart] = useState(getCart('cart') || []);
  const [address, setAddress] = useState(addressUser);
  const [finish, setFinish] = useState(false);
  const [ordersUser, setOrdersUser] = useState();
  const [orderDetails, setOrderDetails] = useState();

  const context = {
    registerUser,
    setregisterUser,
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
    address,
    setAddress,
    finish,
    setFinish,
    ordersUser,
    setOrdersUser,
    setOrderDetails,
    orderDetails,
  };

  return (
    <div className="container-context">
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
