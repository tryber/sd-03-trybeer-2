import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ContextAplication } from '../../Context';
import api from '../../Services/api';
import { login } from '../../Services';
import ButtonEnter from './ButtonEnter';

const handleChangeInput = (name, event, input, setUser) => {
  setUser({ ...input, [name]: event });
};

const validEmailRegEx = /^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i;
const minPassword = 6;
const status = 400;

const FormInput = () => {
  const { setUser, user, setDisableButton } = useContext(ContextAplication);
  const history = useHistory();

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
      if (response.data.status === status) return history.push('/login');
      login(response.data);
      return history.push('/products');
    } catch (err) {
      return err;
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={ singIn }>
        <label htmlFor="email" data-testid="email-input">
          Email
          <input
            className="buttons"
            onChange={ ({ target }) => handleChangeInput('email', target.value, user, setUser) }
            name="email"
            type="email"
            required
          />
        </label>
        <label htmlFor="password" data-testid="password-input">
          Password
          <input
            className="buttons"
            onChange={ ({ target }) => handleChangeInput('password', target.value, user, setUser) }
            name="password"
            required
            type="password"
          />
        </label>
        <ButtonEnter />
      </form>
    </div>
  );
};

export default FormInput;
