import '../../css/navbar.style.css'
import { faCartShopping, faCaretDown, faCaretUp,faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../../resources/icon.png'
import React, { useState, useEffect } from 'react'
import CategoryDropdown from './CategoryDropdown';

export default function Navbar(props) {

  return (
    <div class='Navbar'>
      <div class="hor-center">
        {props.page !== "Home" && <div class="navbar-back-icon-container">
          <FontAwesomeIcon icon={faCaretLeft} class="navbar-back-icon" onClick={(e) => props.pageHandle("Home")} />
        </div>}
        {props.page == "Home" && !props.lastClick &&
          <div class="home-navbar nav-text-blue">
            <div onClick={(e) => props.selectCategory("Home")}>Home</div>
          </div>}
        {(props.page == "Home" && ( props.lastClick == true || props.page == "Search")) &&
          <div class="home-navbar nav-text-white">
            <div onClick={(e) => props.selectCategory("Home")}>Home</div>
          </div>}
          {props.page === "Home"&&
        <div class="category-toggle">
          {props.lastClick && <div class="nav-text-blue" onClick={(e) => props.toggleHandle()}>Category</div>}
          {!props.lastClick && <div class="nav-text-white" onClick={(e) => props.toggleHandle()}>Category</div>}
          {!props.lastClick && !props.toggle && <FontAwesomeIcon icon={faCaretDown} class="toggle-icon" onClick={(e) => props.toggleHandle()} />}
          {!props.lastClick && props.toggle && <FontAwesomeIcon icon={faCaretUp} class="toggle-icon" onClick={(e) => props.toggleHandle()} />}
          {props.lastClick &&!props.toggle && <FontAwesomeIcon icon={faCaretDown} class="toggle-icon-selected" onClick={(e) => props.toggleHandle()} />}
          {props.lastClick &&props.toggle && <FontAwesomeIcon icon={faCaretUp} class="toggle-icon-selected" onClick={(e) => props.toggleHandle()} />}
          {props.toggle && <CategoryDropdown selectCategory={props.selectCategory} />}
        </div>}
        { props.page=="Search" &&
          <div class='navbar-header-pad'> 
            <div class='navbar-header-text'>
              / {props.header}
            </div>
          </div>
        }
        { props.page!=="Search" && props.page!=="Home" &&
          <div class='navbar-header-pad'> 
            <div classe='navbar-header-text'>
               {props.page}
            </div>
          </div>
        }



        <img src={logo} class="navbar-logo" onClick={(e) => props.pageHandle("Home")}/>
        <div class="navbar-header" onClick={(e) => props.pageHandle("Home")}>azala</div>
        {props.user.username !== "anonymous" && <div class="navbar-user-name-pad">
          <div class="navbar-name-header">Hi! : {props.user.name}</div>
        </div>}
        <div class="cartlogo-box" onClick={(e) => props.pageHandle("Cart")}><FontAwesomeIcon icon={faCartShopping} class="cart-icon" /></div>
        <div class="login-btn-pad">
          {!props.loggedin && <div class="navbar-login-button-blue" onClick={(e) => props.setPopupBackground(true, "login")}><p class="btn-center ">Log in</p></div>}
          {props.loggedin && <div class="navbar-login-button-pink" onClick={(e) => props.Logout()}><p class="btn-center ">Log out</p></div>}
        </div>
      </div>
    </div>
  )
}
