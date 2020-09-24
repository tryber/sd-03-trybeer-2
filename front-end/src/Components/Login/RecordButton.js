import React from 'react';
import { Link } from 'react-router-dom';

const RecordButton = () => (
  <div>
    <Link to="/register">
      <button
        type="button"
        data-testid="no-account-btn"
      >
        Ainda não tenho conta
      </button>
    </Link>
  </div>
);

export default RecordButton;
