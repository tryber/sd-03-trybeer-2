import React, { useState } from 'react';
import PropTypes from 'prop-types';
import menu from '../../assets/Menu/Menu.png';
import LogoutButton from './LogoutButton';
import AdminProfileButtton from './AdminProfileButton';
import AdminResquestButton from './AdminRequestBurron';

const TopMenuAdmin = ({ param }) => {
  const [divDisabled, setDivDisabled] = useState(false);

  return (
    <div>
      <div>
        <button
          type="button"
          data-testid="top-hamburguer"
          onClick={ () => setDivDisabled(!divDisabled) }
        >
          <img src={ menu } alt="Menu Superior" width="50px" />
        </button>
        <div
          className="admin-side-bar-container"
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

TopMenuAdmin.propTypes = {
  param: PropTypes.string.isRequired,
};

export default TopMenuAdmin;
