import '../../css/navbar.style.css'
import { faCartShopping,faCaretDown,faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../../resources/icon.png'
import React, { useState, useEffect } from 'react'
import CategoryDropdown from './CategoryDropdown';

export default function Navbar(props) {
  const [toggle,setToggle] = useState(false)

  const toggleHandle = () =>{
    setToggle(!toggle)
  }

  return (
    <div class='Navbar'>
      <div class="hor-center">
        <div class="category-toggle">
          <div>{props.header}</div>
            {!toggle && <FontAwesomeIcon icon={faCaretDown} class="toggle-icon" onClick={(e) => toggleHandle()}/>}
            {toggle && <FontAwesomeIcon icon={faCaretUp} class="toggle-icon" onClick={(e) => toggleHandle()}/>}
            {toggle && <CategoryDropdown/>}
        </div>
        <img src={logo} class="logo"/>
        <div class="header">azala</div>
        <div class="cartlogo-box"  onClick={(e) => props.showSearch(!props.search)}><FontAwesomeIcon icon={faCartShopping} class="cartIcon"/></div>
      </div>
    </div>
  )
}
