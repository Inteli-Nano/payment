import { toast } from 'react-toastify'
import { GET_PAYMENT_HISTORY } from '../types'
import { getApi, postApi } from './../../apis'
import { PAYMENT_HISTORY, PAY_HANDLE } from './../../utils/manageURL'

export const paymentHistory = (email) => {
  return (dispatch) => {
    getApi(`${PAYMENT_HISTORY}?email=${email}`)
      .then((res) => {
        // toast.success(res.data.message);
        dispatch({type: GET_PAYMENT_HISTORY, payload: res.data.doc })
      })
      .catch((err) => toast.error(err.message))
  }
}

export const subscriptionHandle = (data) => {
  postApi(`${PAY_HANDLE}`, data)
  .then(res => {
    if (res.status == 200) {
      toast.success("Successfully");
    }
  })
  .catch(e => console.log(e))
}
