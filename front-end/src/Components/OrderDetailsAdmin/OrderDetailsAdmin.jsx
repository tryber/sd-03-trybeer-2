import React, { useState, useEffect } from 'react';
import TopMenuAdmin from '../Header/TopMenuAdmin';
import CardDetailsAdmin from './CardDetailsAdmin';
import api from '../../Services/api';

function AdminOrderDetails() {
  const [list, setList] = useState([]);

  useEffect(() => {
    api.get('/admin/orders').then(({ data }) => setList(data));
  }, [])

  return (
    <div>
      <TopMenuAdmin />
      { list && <CardDetailsAdmin list={list} />}
    </div>
  );
}
export default AdminOrderDetails;
