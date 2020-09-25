import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ContextAplication } from '../../Context';
import api from '../../Services/api';
import { login } from '../../Services/auth';

const nameInvalid = 12;
const passwordInvalid = 6;

const validEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const validName = /[A-Z-a-z]+$/i;

const handleChangeInput = (name, event, input, setregisterUser) => {
  setregisterUser({ ...input, [name]: event });
};

const UserRegister = () => {
  const {
    registerUser,
    setregisterUser,
  } = useContext(ContextAplication);

  const {

    name = 'a',
    password,
    email,
    role,
  } = registerUser;

  const [isCheked, setisCheked] = useState(false);
  const [emailUsed, setemailUsed] = useState('');

  const history = useHistory();

  useEffect(() => {
    if (isCheked) {
      return setregisterUser({ ...registerUser, role: 'administrator' });
    }
    return setregisterUser({ ...registerUser, role: 'client' });
  }, [isCheked]);

  const validationRegister = () => (
    (name.length >= nameInvalid && validName.test(name))
    && (password >= passwordInvalid && typeof password !== 'number')
    && (validEmail.test(email))
  );

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await api.post('/register', {
      name,
      email,
      password,
      role,
      });
      const response = await api.post('/login', { email, password });
      login(response.data);
      history.push('/products');
    } catch
    (err) {
      const usedEmail = err.response.data.message;
      return setemailUsed(usedEmail);
    } return null;
  };

  if (emailUsed) return <p>{emailUsed}</p>

  return (
    <form onSubmit={ submitForm }>
      <h1>Registro</h1>
      <div>Nome</div>
      <input
        type="text"
        className="buttonRegister"
        data-testid="signup-name"
        onChange={ ({ target }) => handleChangeInput('name', target.value, registerUser, setregisterUser) }
      />
      <div>Email</div>
      <input
        className="buttonEmail"
        data-testid="signup-email"
        type="email"
        onChange={ ({ target }) => handleChangeInput('email', target.value, registerUser, setregisterUser) }
      />
      <div>Password</div>
      <input
        className="buttonPassword"
        data-testid="signup-password"
        type="password"
        onChange={ ({ target }) => handleChangeInput('password', target.value, registerUser, setregisterUser) }
      />
      <div>
        Quero Vender
        <input
          type="checkbox"
          data-testid="signup-seller"
          onClick={ () => setisCheked(!isCheked) }
        />
        <div>
          <button
            type="submit"
            data-testid="signup-btn"
            disabled={ !validationRegister() }
          >
            Cadastrar
          </button>
        </div>
      </div>
    </form>
  );
};

export default UserRegister;
