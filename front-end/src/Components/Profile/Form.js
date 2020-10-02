import React, { useContext, useState } from 'react';
import api from '../../Services/api';
import { ContextAplication } from '../../Context';
import { getToken } from '../../Services';
import JwtDecode from '../../Services/JwtDecode';

const maxNameSize = 12;

const Form = () => {
  const { name, setName } = useContext(ContextAplication);
  const [responseUpdate, setResponseUpdate] = useState();

  const submitForm = async (e) => {
    e.preventDefault();
    if (name.length < maxNameSize) return;

    const token = getToken('token');
    const updateProf = await api.post('/profile', { token, name });
    const { message } = await updateProf.data;
    setResponseUpdate(message);
    setName('');
  };

  const updateName = (newName) => setName(newName);

  const getEmail = () => {
    const JWT = JwtDecode();
    return JWT.email;
  };

  return (
    <div>
      <form onSubmit={ submitForm }>
        <label htmlFor="Email">
          Email
          <input
            type="text"
            readOnly
            name="email"
            id="email"
            data-testid="profile-email-input"
            value={ getEmail() }
          />
        </label>
        <label htmlFor="name">
          Nome
          <input
            minLength="12"
            type="text"
            name="name"
            id="name"
            data-testid="profile-name-input"
            value={ name }
            onChange={ (e) => updateName(e.target.value) }
          />
        </label>
        <button
          data-testid="profile-save-btn"
          disabled={ name.length < maxNameSize }
          type="submit"
        >
          Salvar
        </button>
      </form>
      { responseUpdate && responseUpdate }
    </div>
  );
};

export default Form;
