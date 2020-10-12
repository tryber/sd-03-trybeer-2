import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import TopMenuAdmin from '../Header/TopMenuAdmin';
import { getToken } from '../../Services/index';

function AdminOrderDetails() {
  const [list, setList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (!getToken) return history.push('/login');
    const headers = new Headers({
      'Authorization': getToken
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
      {list.map((getList, idx) => (
        <Link to={`/admin/orders/${getList.id}`}>
          <div data-testid={`${idx}-order-card-container`}>
            <p data-testid={`${idx}-order-number`}>Pedido {getList.id}</p>
            <p data-testid={`${idx}-order-address`}>
              {getList.deliveryAddress}, {getList.deliveryNumber}
            </p>
            <p data-testid={`${idx}-order-total-value`}>{`Total: R$ ${getList.totalPrice.toFixed(2).toString().replace('.', ',')}`}</p>
            <p data-testid={`${idx}-order-status`}>{getList.status}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default AdminOrderDetails;
