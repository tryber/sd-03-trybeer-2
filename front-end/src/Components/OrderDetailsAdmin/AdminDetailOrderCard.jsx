import React, { useState, useEffect } from 'react';
import TopMenuAdmin from '../Header/TopMenuAdmin';
import AdminDetailCard from './AdminDetailCard';
import api from '../../Services/api';

function AdminOrderDetails() {
  const [listDetail, setListDetail] = useState([]);
  /* const [statusChange, setStatusChange] = useState('Pendente'); */

  useEffect(() => {
    const locationUrl = window.location.pathname;
    const id = locationUrl.charAt(locationUrl.length - 1);
    api.get(`/admin/orders/${id}`).then(({ data }) => setListDetail(data));

  }, [])
  return (
    
    <div>
      <TopMenuAdmin param="Detalhes de Pedido" />
      { listDetail && listDetail.length > 0 && <AdminDetailCard listDetail={listDetail} />}
    </div>
  );
}
export default AdminOrderDetails;
