import React from 'react'
import './login.css'
import assets from '../../../assets/assets'

const login = () => {
  return (
    <div>
      <div className="login">
        <img src={assets.logo_big} alt="" className="logo" />
        <form className="login-form">
          <h2>Sign Up</h2>
          <input type="text" className="form-input" placeholder='Username' required/>
          <input type="email" className="form-input" placeholder='Email address' required/>
          <input type="password" className="form-input" placeholder='Password' required/>
          <button type='submit'>Sign up</button>
          <div className="login-term">
            <input type="checkbox" />
            <p>Agree to the terms of use & privacy policy</p>
          </div>
          <div className="login-forgot">
            <p className="login-toggle">Already have an account <span>click here</span></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default login
