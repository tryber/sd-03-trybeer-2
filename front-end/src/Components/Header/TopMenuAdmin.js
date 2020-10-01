import React, { useState } from 'react';
import menu from '../../assets/Menu/Menu.png';
import LogoutButton from './LogoutButton';
import AdminProfileButtton from '../Header/AdminProfileButton';
import AdminResquestButton from '../Header/AdminRequestBurron';

const TopMenuAdmin = ({ param }) => {
  const [divDisabled, setDivDisabled] = useState(false);

  return (
    <div>
      <div>
        <button
          type="button"
          data-testid="top-hamburguer"
          onClick={() => setDivDisabled(!divDisabled)}
        >
          <img src={menu} alt="Menu Superior" width="50px" />
        </button>
        <div
          class="admin-side-bar-container"
        >
          <AdminResquestButton />
          <AdminProfileButtton />
          <LogoutButton />
        </div>
      </div>
      <h1 data-testid="top-title">{param}</h1>
    </div>
  );
};

export default TopMenuAdmin;
