import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ContextAplication = createContext();

const infoUser = { email: '', password: '' };

const AplicationProvider = ({ children }) => {
  const [user, setUser] = useState(infoUser);
  const [disableButton, setDisableButton] = useState(true);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('client');

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
