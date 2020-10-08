import React from 'react';
import Form from '../../Components/Profile/Form';

import './styles.css';

const Profile = () => (
  <div className="container-profile">
    <h1 data-testid="top-title">Cliente - Meu perfil</h1>
    <Form />
  </div>
);

export default Profile;
