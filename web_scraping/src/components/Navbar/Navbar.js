import '../../css/navbar.style.css'
import { faCartShopping, faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../../resources/icon.png'
import React, { useState, useEffect } from 'react'
import CategoryDropdown from './CategoryDropdown';

export default function Navbar(props) {
  const [toggle, setToggle] = useState(false)
  const [lastClick, setLastClick] = useState(false)

  const toggleHandle = () => {
    if (toggle == false) {
      setLastClick(true)
    }
    setToggle(!toggle)
  }

  const selectCategory = (destination) => {
    if (destination !== "Home") {
      props.pageHandle("Search")
    }
    else if (destination === "Home") {
      props.pageHandle("Home")
      setLastClick(false)
    }
    props.searchResultHandle(destination)
    toggleHandle()
  }

  return (
    <div class='Navbar'>
      <div class="hor-center">

        {props.page == "Home" && !lastClick &&
          <div class="home-navbar nav-text-blue">
            <div onClick={(e) => selectCategory("Home")}>Home</div>
          </div>}
        {(lastClick == true || props.page == "Search" || props.page == "Cart") &&
          <div class="home-navbar nav-text-white">
            <div onClick={(e) => selectCategory("Home")}>Home</div>
          </div>}

        <div class="category-toggle">
          {lastClick && <div class="nav-text-blue">Category</div>}
          {!lastClick && <div class="nav-text-white">Category</div>}
          {!toggle && <FontAwesomeIcon icon={faCaretDown} class="toggle-icon" onClick={(e) => toggleHandle()} />}
          {toggle && <FontAwesomeIcon icon={faCaretUp} class="toggle-icon" onClick={(e) => toggleHandle()} />}
          {toggle && <CategoryDropdown selectCategory={selectCategory} />}
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
          {props.loggedin && <div class="navbar-login-button-pink" onClick={(e) => props.setLoggedIn(false)}><p class="btn-center ">Log out</p></div>}
        </div>
      </div>
    </div>
  )
}
