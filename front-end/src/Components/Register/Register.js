import React, { useContext, useEffect,useState } from 'react';
import { ContextPlication } from '../../Context';

const nameInvalid = 12;
const passwordInvalid = 6;

const validEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const validName = /[A-Z-a-z]+$/i;

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

  const [isCheked, setisCheked] = useState(false)

  useEffect(() => {
    if (isCheked) {
      return setRole('administrator');
    }
    setRole('client');
  }, [isCheked])

  console.log(role);

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
        onChange={(event) => setName(event.target.value)}
      />
      <div>Email</div>
      <input
        className="buttonEmail"
        data-testid="signup-email"
        type="email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <div>Password</div>
      <input
        className="buttonPassword"
        data-testid="signup-password"
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <div>
        Quero Vender
        <input
          type="checkbox"
          data-testid="signup-seller"
          onClick={() => setisCheked(!isCheked)}
        />
        <div>
          <button
            type="submit"
            data-testid="signup-btn"
            disabled={!validationRegister()}
          >
            Cadastrar
          </button>
        </div>
      </div>
    </form>
  );
};

export default Register;
