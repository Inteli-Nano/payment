import { toast } from 'react-toastify'
import { AUTH_LOGIN, AUTH_PROFILE, AUTH_SIGNUP } from '../types'
import { getApi, postApi, putApi } from './../../apis'
import {
  AUTH_LOGIN_URL,
  AUTH_SIGNUP_URL,
  PROFILE_URL,
  GET_USER_URL
} from './../../utils/manageURL'

export const SignUpAction = (data,history) => {
  return (dispatch) => {
    postApi(AUTH_SIGNUP_URL, data)
      .then((res) => {
        if (res.status === 200) {
          // dispatch({ type: AUTH_SIGNUP, payload: res.data.doc })
          toast.success(res.data.message)
          localStorage.setItem("register", res.data.doc.email);
            window.location.assign(`http://localhost:3000/membership`);
        } else {
          return toast.warn(res.data.message)
        }
      })
      .catch((err) => toast.error(err.data.message))
  }
}

export const LogInAction = (data) => {
  return (dispatch) => {
    postApi(AUTH_LOGIN_URL, data)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          dispatch({ type: AUTH_LOGIN, payload: res.data.doc })
          toast.success(res.data.message)
          window.localStorage.setItem('auth', res.data.doc.email);
          window.localStorage.setItem('register', res.data.doc.email);
          window.location.assign("http://localhost:3000/myprofile");
        } else {
          return toast.warn(res.data.message)
        }
      })
      .catch((err) => {
        toast.error.apply(err.data.message)
      })
  }
}

export const profileAction = (data) => {
  return (dispatch) => {
    putApi(PROFILE_URL, data)
      .then((res) => {
        dispatch({ type: AUTH_PROFILE, payload: res.data.docs })
        toast.success(res.data.message)
      })
      .catch((err) => {
        toast.error(err.data.message)
      })
  }
}

export const getUserInfo = (email) => {
  if(email) {
    return (dispatch) => {
      postApi(GET_USER_URL, {email: email})
        .then(res => {
          dispatch({ type: AUTH_LOGIN, payload: res.data.doc });
        })
    }
  } 
}