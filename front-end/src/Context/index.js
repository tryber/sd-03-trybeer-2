import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { getCart } from '../Services';

export const ContextAplication = createContext();

const infoUser = { email: '', password: '' };
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
