import React from 'react';
import { useHistory } from 'react-router-dom';

const ProductsButton = () => {
  const history = useHistory();

  return (
    <div>
      <button
        type="button"
        data-testid="side-menu-item-products"
        onClick={ () => history.push('/products') }
      >
        Produtos
      </button>
    </div>
  );
};

export default ProductsButton;
