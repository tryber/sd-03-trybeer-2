import React, { useContext,useState } from 'react';
import decode from 'jwt-decode';
import api from '../../Services/api';
import { ContextAplication } from '../../Context';

const maxNameSize = 12;

const Form = () => {
  const { name, setName } = useContext(ContextAplication);
  const [message, setmessage] = useState();
  const submitForm = async (e) => {
    e.preventDefault();
    if (name.length < maxNameSize) return false;
    try {
      const token = localStorage.getItem('token');
      const updateProf = await api.post('/profile', { token, name });
      setmessage(updateProf.data.message);
      setName('');
    return updateProf.data.message;
    } catch (error) {
      return error;
    }
  };

  const updateName = (newName) => setName(newName);

  const getEmail = () => {
    const token = JSON.parse(localStorage.getItem('token'));
    return decode(token).email;
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
      { message && message }
    </div>
  );
};

export default Form;
