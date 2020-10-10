import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      .then((data) => setList(data));
  }, [])

  return (
    <div>
      <TopMenuAdmin />
      {/*GetList =  pedido Atual*/}
      <p>FUNCIONAL</p>
      {list.map((getList, idx) => (
        <Link to={`/admin/orders/${getList.id}`}>
          <div data-testid={`${idx}-order-card-container`}>
            <p data-testid={`${idx}-order-number`}>{getList.id}</p>
            <p data-testid={`${idx}-order-address`}>
              {getList.deliveryAddress},{getList.deliveryNumber}
            </p>
            <p data-testid={`${idx}-product-total-value`}>{` R$ ${getList.price}`}</p>
            <p data-testid="order-total-value">{`Total: R$ ${getList.total}`}</p>
            <p data-testid={`${idx}-order-status`}>{getList.status}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default AdminOrderDetails;