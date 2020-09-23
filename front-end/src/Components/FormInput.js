import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ContextPlication } from '../Context';

const handleChangeInput = (name, event, input, setUser) => {
  setUser({ ...input, [name]: event });
};

const FormInput = () => {
  const { setUser, user, setDisableButton } = useContext(ContextPlication);
  const { handleSubmit } = useForm();

  useEffect(() => {
    const validEmailRegEx = /^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i;
    const minPassword = 6;

    if (
      !validEmailRegEx.test(user.email)
      || user.password.length < minPassword
    ) {
      return setDisableButton(true);
    }
    return setDisableButton(false);
  }, [user, setDisableButton]);

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={ handleSubmit(user) }>
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
      </form>
    </div>
  );
};

export default FormInput;
