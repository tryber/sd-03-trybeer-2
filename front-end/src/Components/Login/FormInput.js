import React, { useContext, useEffect } from 'react';
import { ContextPlication } from '../../Context';
import api from '../../Services/api';
import { login } from '../../Services/auth';
import ButtonEnter from './ButtonEnter';

const handleChangeInput = (name, event, input, setUser) => {
  setUser({ ...input, [name]: event });
};

const validEmailRegEx = /^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i;
const minPassword = 6;

const FormInput = () => {
  const { setUser, user, setDisableButton } = useContext(ContextPlication);

  useEffect(() => {
    if (!validEmailRegEx.test(user.email) || (user.password.length < minPassword)) {
      return setDisableButton(true);
    }
    return setDisableButton(false);
  }, [user, setDisableButton]);

  const singIn = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    try {
      const response = await api.post('/login', { email, password });
      login(response.data.token);
    } catch (err) {
      return err;
    }
    return null;
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={ singIn }>
        <input
          className="buttons"
          placeholder="Email"
          data-testid="email-input"
          onChange={ ({ target }) => handleChangeInput('email', target.value, user, setUser) }
          type="email"
          required
        />
        <input
          className="buttons"
          data-testid="password-input"
          onChange={ ({ target }) => handleChangeInput('password', target.value, user, setUser) }
          placeholder="Senha"
          required
          type="password"
        />
        <ButtonEnter />
      </form>
    </div>
  );
};

export default FormInput;
