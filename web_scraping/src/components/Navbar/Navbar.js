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
        {props.page !== "Home"  && props.page !== "Search" && <div class="navbar-back-icon-container">
          <FontAwesomeIcon icon={faCaretLeft} class="navbar-back-icon" onClick={(e) => props.pageHandle("Home",props.prevPage)} />
        </div>}
  
        {(props.page == "Home" || props.page == "Search")  && !props.lastClick &&
          <div class="home-navbar nav-text-blue">
            <div onClick={(e) => props.pageHandle("Home","Home")}>Home</div>
          </div>}
        {(props.page == "Home" || props.page == "Search") && props.lastClick &&
          <div class="home-navbar nav-text-white">
            <div onClick={(e) => props.pageHandle("Home","Home")}>Home</div>
          </div>}
          {/* {(props.page === "Home" || props.page == "Search")&&
        
        <div class="category-toggle">
          {props.lastClick && <div class="nav-text-blue" onClick={(e) => props.toggleHandle()}>Category</div>}
          {!props.lastClick && <div class="nav-text-white" onClick={(e) => props.toggleHandle()}>Category</div>}
          {!props.lastClick && !props.toggle && <FontAwesomeIcon icon={faCaretDown} class="toggle-icon" onClick={(e) => props.toggleHandle()} />}
          {!props.lastClick && props.toggle && <FontAwesomeIcon icon={faCaretUp} class="toggle-icon" onClick={(e) => props.toggleHandle()} />}
          {props.lastClick &&!props.toggle && <FontAwesomeIcon icon={faCaretDown} class="toggle-icon-selected" onClick={(e) => props.toggleHandle()} />}
          {props.lastClick &&props.toggle && <FontAwesomeIcon icon={faCaretUp} class="toggle-icon-selected" onClick={(e) => props.toggleHandle()} />}
          {props.toggle && <CategoryDropdown toggleHandle={props.toggleHandle} selectCategory={props.selectCategory} />}
        </div>

        } */}
        {(props.page === "Home" || props.page == "Search") && 
        <div class="navbar-compare-container white navbar-headlogo" onClick={(e) => props.pageHandle("Home","Compare")}>
          Compare
        </div>}
        { props.page!=="Search" && props.page!=="Home" &&
          <div class='navbar-header-container navbar-headlogo'> 
               {props.page}
          </div>
        }

        <div class="navbar-mid-header" onClick={(e) => props.pageHandle("Home","Home")}>
          <img src={logo} class="navbar-logo"/>
          <div class="navbar-header" >azala</div>
        </div>
        {props.loggedin && <div class="navbar-user-name-pad">
          <div class="navbar-name-header">Hi! : {props.user.name}</div>
        </div>}
        <div class="login-btn-pad">
          {!props.loggedin && <div class="navbar-login-button-blue" onClick={(e) => props.setPopupBackground(true, "login")}>Log in</div>}
          {props.loggedin && <div class="navbar-login-button-pink" onClick={(e) => props.Logout()}>Log out</div>}
        </div>
      </div>
    </div>
  )
}
