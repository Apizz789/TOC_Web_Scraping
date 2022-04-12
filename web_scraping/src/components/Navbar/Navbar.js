import '../../css/navbar.style.css'
import { faCartShopping, faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../../resources/icon.png'
import React, { useState, useEffect } from 'react'
import CategoryDropdown from './CategoryDropdown';

export default function Navbar(props) {

  

  return (
    <div class='Navbar'>
      <div class="hor-center">

        {props.page == "Home" && !props.lastClick &&
          <div class="home-navbar nav-text-blue">
            <div onClick={(e) => props.selectCategory("Home")}>Home</div>
          </div>}
        {(props.lastClick == true || props.page == "Search" || props.page == "Cart") &&
          <div class="home-navbar nav-text-white">
            <div onClick={(e) => props.selectCategory("Home")}>Home</div>
          </div>}

        <div class="category-toggle" onClick={(e) => props.toggleHandle()}>
          {props.lastClick && <div class="nav-text-blue">Category</div>}
          {!props.lastClick && <div class="nav-text-white">Category</div>}
          {!props.toggle && <FontAwesomeIcon icon={faCaretDown} class="toggle-icon"  />}
          {props.toggle && <FontAwesomeIcon icon={faCaretUp} class="toggle-icon" />}
          {props.toggle && <CategoryDropdown selectCategory={props.selectCategory} />}
        </div>

        <div>
          {props.header}
        </div>

        <img src={logo} class="logo" />
        <div class="header">azala</div>
        {props.user.username !== "anonymous" && <div class="navbar-user-name-pad">
          <div class="navbar-name-header">Hi! : {props.user.name}</div>
        </div>}
        <div class="cartlogo-box" onClick={(e) => props.pageHandle("Cart")}><FontAwesomeIcon icon={faCartShopping} class="cartIcon" /></div>
        <div class="login-btn-pad">
          {!props.loggedin && <div class="navbar-login-button-blue" onClick={(e) => props.setPopupBackground(true, "login")}><p class="btn-center ">Log in</p></div>}
          {props.loggedin && <div class="navbar-login-button-pink" onClick={(e) => props.logout()}><p class="btn-center ">Log out</p></div>}
        </div>
      </div>
    </div>
  )
}
