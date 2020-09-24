import React, { useContext } from 'react';
import { ContextPlication } from '../../Context';

const Register = () => {
  const {
    name,
    setName,
    password,
    setPassword,
    email,
    setEmail,
    role,
    setRole,
  } = useContext(ContextPlication);

  const nameInvalid = 12;
  const passwordInvalid = 6;

  const validEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  const validName = /[A-Z-a-z]+$/i;

  const validationRegister = () => (
    (name.length >= nameInvalid && validName.test(name))
    && (password.length >= passwordInvalid && typeof password !== 'number')
    && (validEmail.test(email))
  );

  return (
    <form>
      <h1>Registro</h1>
      <div>Nome</div>
      <input
        className="buttonRegister"
        data-testid="signup-name"
        onChange={ (event) => setName(event.target.value) }
      />
      <div>Email</div>
      <input
        className="buttonEmail"
        data-testid="signup-email"
        type="email"
        onChange={ (event) => setEmail(event.target.value) }
      />
      <div>Senha</div>
      <input
        className="buttonPassword"
        data-testid="signup-password"
        onChange={ (event) => setPassword(event.target.value) }
      />
      <div>
        Quero vender
        <input
          type="checkbox"
          data-testid="signup-seller"
          onChange={ () => {
            if (role === 'client') {
              setRole('administrator');
            } else {
              setRole('client');
            }
          } }
        />
        <div>
          <button
            type="submit"
            data-testid="signup-btn"
            disabled={ !validationRegister() }
          >
            Cadastro
          </button>
        </div>
      </div>
    </form>
  );
};

export default Register;
