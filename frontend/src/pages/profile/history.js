import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import moment from "moment";
import { paymentHistory } from './../../store/acitons/payment'


const columns = [
  { field: 'id', headerName: 'no', width: 90 },
  {
    field: 'price',
    headerName: 'Price',
    width: 150,
    editable: false,
  },
  {
    field: 'updated_at',
    headerName: 'Update time',
    type: "date",
    width: 200,
    editable: false,
  },
  {
    field: 'created_at',
    headerName: 'Create time',
    type: 'date',
    width: 200,
    editable: false,
  }
];


const History = () => {
  const dispatch = useDispatch();
  const email = window.localStorage.getItem('auth')

  React.useEffect(() => {
    dispatch(paymentHistory(email))
  }, [])

  const history = useSelector(state => state.history.payhistory);
  const rows = [];
  history && history.map((item, key) => {
    rows.push({
      id: ++key,
      price: item.price,
      created_at: item.created_at,
      updated_at: item.updated_at
    })
  })
  return <>
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </Box>
  </>
}
export default History
