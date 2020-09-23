import React from 'react';

const Register = () => (
  <div>
    <form>
      <h1>Registro</h1>
      <div>Nome</div>
      <input className="buttonRegister" data-testid="signup-name" />
      <div>Email</div>
      <input className="buttonEmail" data-testid="signup-email" />
      <div>Senha</div>
      <input className="buttonPassword" data-testid="signup-password" />
      <div>
        Quero vender
        <input type="checkbox" data-testid="signup-seller" />
      </div>
    </form>
  </div>
);

export default Register;
