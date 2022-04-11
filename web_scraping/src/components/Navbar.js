import React from 'react'
import '../css/navbar.style.css'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




export default function Navbar() {
  return (
    <div class='Navbar'>
      <div class="hor-center">
        <div class="category-toggle">
          <div>category</div>
          <div class="toggle-icon">V</div>
          </div>
        <div class="header">D</div>
        <div class="header">azala</div>
        <FontAwesomeIcon icon={faCartShopping} class="cartIcon"/>
      </div>
    </div>
  )
}
