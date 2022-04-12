import React, { useState, useEffect } from 'react'
import '../../../css/LoginPopup.style.css'
function LoginPopup(props) {
  
  const Passvalue = () => {
    props.setPopupBackground(false)
    // document.getElelementByID("Data_ID").value=Data_ID;
    // document.getElelementByID("Data_Type").value=Data_Type;
    let username = document.getElementById("username-element").value
    document.getElementById("username-element").innerHTML = username
    let password = document.getElementById("password-element").value
    document.getElementById("password-element").innerHTML = password
    alert(username+password)
    props.isLoggedIn(username, password)
  }

  return (

    <div class="LoginPopup">
      <div class="center-containter">
        <div class="center-child loginpopup-content">

          <div class="loginpopup-header-pad">
            <h3>Login</h3>
          </div>

          {/* <label class="login-input-header">Username</label> */}
          <div class="center-containter login-main-input-padding">
            <div class="center-child">
              <div class="login-input-padding">
                <input id="username-element" type="username" className="login-input-box" placeholder="Enter username" />
              </div>
              {/* <label  class="login-input-header">Password</label> */}
              <div class="login-input-padding">
                <input id="password-element" type="password" className="login-input-box" placeholder="Enter password" />
              </div>
              <div class="login-btn-padding">
                <div className="login-btn" onClick={(e) => Passvalue()}><p>Login</p></div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default LoginPopup