import React, { useState } from 'react'
import './login.css'
import assets from '../../../assets/assets'

const login = () => {

  const [currState,setCurrState] = useState("Sign up");

  return (
    <div>
      <div className="login">
        <img src={assets.logo_big} alt="" className="logo" />
        <form className="login-form">
          <h2>{currState}</h2>
          {currState === "Sign up"?<input type="text" className="form-input" placeholder='Username' required/>:null}
          <input type="email" className="form-input" placeholder='Email address' required/>
          <input type="password" className="form-input" placeholder='Password' required/>
          <button type='submit'>{currState === "Sign up"?"Create account":"Login now"}</button>
          <div className="login-term">
            <input type="checkbox" />
            <p>Agree to the terms of use & privacy policy</p>
          </div>
          <div className="login-forgot">
            {currState === "Sign up"?<p className="login-toggle">Already have an account <span onClick={()=>setCurrState("Login")}>click here</span></p>:<p className="login-toggle">You don't have account <span onClick={()=>setCurrState("Sign up")}>click here</span></p>}
          </div>
        </form>
      </div>
    </div>
  )
}

export default login
