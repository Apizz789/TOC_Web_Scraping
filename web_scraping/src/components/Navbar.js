import React from 'react'
import '../css/navbar.style.css'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../resources/icon.png'

export default function Navbar(props) {
  return (
    <div class='Navbar'>
      <div class="hor-center">
        <div class="category-toggle">
          <div>{props.header}</div>
          <div class="toggle-icon">V</div>
          </div>
        <img src={logo} class="logo"/>
        <div class="header">azala</div>
        <FontAwesomeIcon icon={faCartShopping} class="cartIcon"/>
      </div>
    </div>
  )
}
