import React, { useContext, useEffect } from 'react';
import { ContextPlication } from '../Context';

const handleChangeInput = (name, event, input, setUser) => {
  setUser({ ...input, [name]: event });
};

const FormInput = () => {
  const { setUser, user, setDisableButton } = useContext(ContextPlication);

  useEffect(() => {
    const validEmailRegEx = /^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i;

    if (!validEmailRegEx.test(user.email) || (user.password.length < 6)) {
      return setDisableButton(true);
    }
    return setDisableButton(false);
  }, [user]);

  return (
    <div>
      <h1>Login</h1>
      <form method="POST" action="/login">
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
