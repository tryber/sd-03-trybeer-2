import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import JwtDecode from '../../Services/JwtDecode';

const ClientProducs = () => {
  const history = useHistory();

  useEffect(() => {
    const JWT = JwtDecode();
    if (JWT.role === 'administrator') return history.push('/admin/orders');
  }, [history]);

  return (
    <div>
      ClientProducs
    </div>
  );
};

export default ClientProducs;
