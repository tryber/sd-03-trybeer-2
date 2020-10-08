import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import TopMenuAdmin from '../Header/TopMenuAdmin';
import { getCart, TOKEN_KEY } from '../../Services/index';

const AdminOrderDetails = (props) => {

  const [list, setList] = useState([]);

  useEffect(() => {
    if (!getCart) return props.history.push('/login');
    const headers = new Headers({
      "Authorization": TOKEN_KEY
    });
    fetch('http://localhost:3001/admin/orders', { headers })
      .then((response) => response.json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))))
      .then
  }, [])

  return (
    <div>
      <TopMenuAdmin />
    </div>
  );
}
export default AdminOrderDetails;