import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ContextPlication = createContext();

const infoUser = { email: '', password: '' };

const AplicationProvider = ({ children }) => {
  const [user, setUser] = useState(infoUser);
  const [disableButton, setDisableButton] = useState(true);

  const context = {
    disableButton,
    setDisableButton,
    user,
    setUser,
  };

  return (
    <div>
      <ContextPlication.Provider value={ context }>
        {children}
      </ContextPlication.Provider>
    </div>
  );
};

AplicationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AplicationProvider;
