import React from 'react';
import { Link } from 'react-router-dom';

const RecordButton = () => (
  <div>
    <Link
      to="/register"
      type="button"
      data-testid="no-account-btn"
    >
      Ainda não tenho conta
    </Link>
  </div>
);

export default RecordButton;
