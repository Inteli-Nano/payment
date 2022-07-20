import React from 'react'
import Header from './layout/Header'
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import SignupPage from './pages/auth/signup'
import LoginPage from './pages/auth/login'
import HomePage from './pages/home'
import ProfilePage from './pages/profile'
import MembershipPage from './pages/membership'
import Payment from './pages/CheckoutForm'
import { getUserInfo } from './store/acitons/auth'
import FreeModePage from './pages/workspace/freemode'
import CommonPage from './pages/workspace/middlemode'
import VipPage from './pages/workspace/topmode'

const App = () => {
  const dispatch = useDispatch()
  const email = localStorage.getItem('auth')
  React.useEffect(() => {
    if (email) dispatch(getUserInfo(email))
  }, [email])
  const auth = window.localStorage.getItem('auth');
  const user = useSelector(state =>  state.auth.user);
  return (
    <div>
      <Header />
      <div className="main-layout">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/payment" element={<Payment />} />
          {auth ? (
            <Route path="/myprofile" element={<ProfilePage />} />
          ) : (
            ''
          )}
          {auth ? <Route path="/freemode" element={<FreeModePage />} />: ""}
          {auth && user.price == 15 ? <Route path="/commonmode" element={<CommonPage />} />: ""}
          {auth && user.price == 30 ? <Route path="/vipmode" element={<VipPage />} />: ""}
        </Routes>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
