import React from 'react'
import { useSelector } from 'react-redux'
import './index.scss'
import { NavLink } from 'react-router-dom'
const Header = () => {
  const username = localStorage.getItem('auth')
    ? localStorage.getItem('auth')
    : null
  const user = useSelector((state) => state.auth.user)
  console.log(user.price)
  const handleLogout = () => {
    localStorage.removeItem('auth')
    setTimeout(() => {
      window.location.assign('http://localhost:3000/login')
    }, 500)
  }
  return (
    <div className="header">
      <div className="pages">
        <div className="logo">
          <NavLink to="/">Logo</NavLink>
          <NavLink to="/home">Home</NavLink>
          {username && user.price == '0' ? (
            <NavLink to="/freemode">Free Mode</NavLink>
          ) : (
            ''
          )}
          {username && user.price == '15' ? (
            <NavLink to="/commonmode">Common Mode</NavLink>
          ) : (
            ''
          )}
          {username && user.price == '30' ? (
            <NavLink to="/vipmode">Vip Mode</NavLink>
          ) : (
            ''
          )}
        </div>
      </div>
      {!username ? (
        <div className="sign">
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </div>
      ) : (
        <div className="authuser">
          <NavLink to="/myprofile">{username}</NavLink>
          <button
            style={{ backgroundColor: 'white', color: '#000' }}
            onClick={(e) => handleLogout()}
          >
            LogOut
          </button>
        </div>
      )}
    </div>
  )
}

export default Header
