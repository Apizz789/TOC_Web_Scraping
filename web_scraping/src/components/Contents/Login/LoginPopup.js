import React, { useState, useEffect } from 'react'

function LoginPopup(props) {
  const Passvalue = () => {
    // document.getElelementByID("Data_ID").value=Data_ID;
    // document.getElelementByID("Data_Type").value=Data_Type;
    let username = document.getElementById("username-element").value
    document.getElementById("username-element").innerHTML = username
    let password = document.getElementById("password-element").value
    document.getElementById("password-element").innerHTML = password
    props.isLoggedIn(username,password)
  }

  return (
    <div>
        <h3>Login</h3>
        <div className="form-group" >
          <label>Username</label>
          <input id="username-element" type="username" className="form-control" placeholder="Enter username" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input  id="password-element"  type="password" className="form-control" placeholder="Enter password" />
        </div>
        <div className="login-btn" onClick={(e) => Passvalue()}>Submit</div>
    </div>

  )
}

export default LoginPopup