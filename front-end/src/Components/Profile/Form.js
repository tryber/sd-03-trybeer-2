import React, { useContext } from 'react';
import decode from 'jwt-decode';
import api from '../../Services/api';
import { ContextAplication } from '../../Context';

const Form = () => {
  const { name, setName } = useContext(ContextAplication);
  console.log('funcionando');
  const submitForm = async (e) => {
    e.preventDefault();
    if (name.length < maxNameSize) return false;
    try {
      const token = localStorage.getItem('token');
      await api.post('/profile', { token, name });
      setName('');
    } catch (error) {
      return error;
    }
  };

  const updateName = (newName) => setName(newName);

  const maxNameSize = 12;

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
            value={ name }
            onChange={ (e) => updateName(e.target.value) }
          />
        </label>
        <button disabled={ name.length < maxNameSize } type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default Form;
