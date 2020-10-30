import React, { useState, useEffect } from 'react';
import TopMenuAdmin from '../Header/TopMenuAdmin';
import AdminDetailCard from './AdminDetailCard';
import api from '../../Services/api';

function AdminOrderDetails(props) {
  const [listDetail, setListDetail] = useState([]);

  useEffect(() => {
   /*  api.get(`/admin/orders/${id}`).then(({ data }) => setListDetail(data)); */
    fetch (`/admin/orders/${props.match.params.id}`)
    .then((response) => response.json()
    .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))))
    .then((data) => setListDetail(data))
    .catch((err) => {console.error(err)})
    console.log(listDetail);
  }, [])
  return (
    <div>
      <TopMenuAdmin />
      { listDetail && <AdminDetailCard listDetail={listDetail} />}
    </div>
  );
}
export default AdminOrderDetails;
