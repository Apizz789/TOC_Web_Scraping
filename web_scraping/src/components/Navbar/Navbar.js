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

  const selectCategory =(destination)=>{
    alert(destination+ " is selected")
    props.pageHandle("Search")
    props.showSearchResult(destination)
  }

  return (
    <div class='Navbar'>
        <div class="hor-center">

        <div>
          <a onClick={props.pageHandle("Home")}>Home</a>
        </div>
        <div class="category-toggle">
          <div>Category</div>
            {!toggle && <FontAwesomeIcon icon={faCaretDown} class="toggle-icon" onClick={(e) => toggleHandle()}/>}
            {toggle && <FontAwesomeIcon icon={faCaretUp} class="toggle-icon" onClick={(e) => toggleHandle()}/>}
            {toggle && <CategoryDropdown selectCategory={selectCategory}/>}
        </div>
        <div>
            {props.header}
        </div>
        <img src={logo} class="logo"/>
        <div class="header">azala</div>
        <div class="cartlogo-box"  onClick={(e) => props.showSearch(!props.search)}><FontAwesomeIcon icon={faCartShopping} class="cartIcon"/></div>
      </div>
    </div>
  )
}
