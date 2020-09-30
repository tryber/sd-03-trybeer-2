import React from 'react';
import TopMenuAdmin from '../../Components/Header/TopMenuAdmin'
import decode from 'jwt-decode';


const getEmail = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  return decode(token).email;
};

const getName = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  return decode(token).name;
};


const AdminPerfil = () => {
  return (
    <div>
        <TopMenuAdmin param="Perfil" />
  <h1 data-testid="profile-name">Nome : {getName()}</h1>
  <h1 data-testid="profile-email">Email : {getEmail()}</h1>
    </div>
  );
};

export default AdminPerfil;