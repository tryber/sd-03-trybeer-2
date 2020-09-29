import React, { useState } from 'react';
import menu from '../../assets/Menu/Menu.png';
import ProductsButton from './ProductsButton';
import MyRequestsButton from './MyRequestsButton';
import MyProfileButtton from './MyProfileButton';
import LogoutButton from './LogoutButton';

const TopMenu = () => {
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
          className="side-menu-container"
          style={ { display: (divDisabled ? 'block' : 'none') } }
        >
          <ProductsButton />
          <MyRequestsButton />
          <MyProfileButtton />
          <LogoutButton />
        </div>
      </div>
      <h1 data-testid="top-title">TryBeer</h1>
    </div>
  );
};

export default TopMenu;
