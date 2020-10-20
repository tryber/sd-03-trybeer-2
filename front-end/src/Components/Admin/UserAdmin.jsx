import React from 'react';
import decode from 'jwt-decode';
import TopMenuAdmin from '../Header/TopMenuAdmin';

const getEmail = () => {
  const token = (localStorage.getItem('token'));
  return decode(token).email;
};

const getName = () => {
  const token = (localStorage.getItem('token'));
  return decode(token).name;
};

const AdminPerfil = () => (
  <div>
    <TopMenuAdmin param="Perfil" />
    <h1 data-testid="profile-name">
      Nome :
      {getName()}
    </h1>
    <h1 data-testid="profile-email">
      Email :
      {getEmail()}
    </h1>
  </div>
);

export default AdminPerfil;
